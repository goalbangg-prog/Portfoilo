import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const data=JSON.parse(readFileSync(new URL('../src/bmw-results.json',import.meta.url),'utf8'));
const csv=readFileSync(new URL('../evidence/bmw-base-results.csv',import.meta.url),'utf8').trim().split('\n');
const header=csv.shift().split(',');
const original=csv.map(line=>Object.fromEntries(line.split(',').map((value,i)=>[header[i],i<3?value:Number(value)])));
test('Displayed vehicle dataset is identical to the original project CSV',()=>assert.deepEqual(data,original));
test('All five vehicles include the six lifecycle stages without negative values',()=>{
  assert.deepEqual(data.map(d=>d.id),['520i','530e','i5_40','M5','i5_M60']);
  for(const car of data){const parts=['body','battery','fuel_supply','elec_supply','tailpipe','eol'].map(k=>car[k]);assert.ok(parts.every(n=>Number.isFinite(n)&&n>=0));assert.ok(Math.abs(parts.reduce((a,b)=>a+b,0)-car.total)<1e-10,car.id)}
});
test('Per-km values match the stated 200,000 km functional unit',()=>{
 for(const car of data)assert.ok(Math.abs(car.total*1e6/200000-car.per_km_g)<1e-9,car.id);
});
test('Headline 28% comparison uses i5 eDrive40 versus the 520i reference',()=>{
 assert.equal(Math.round((1-data[2].total/data[0].total)*100),28);
 assert.equal(data[2].total.toFixed(1),'40.6');assert.equal(data[0].total.toFixed(1),'56.7');
});
test('EPD correlation uses complete pairs, not all 398 records',()=>{
 const epd=JSON.parse(readFileSync(new URL('../evidence/epd-analysis-results.json',import.meta.url),'utf8'));
 assert.equal(epd.pool_n,187);assert.deepEqual(epd.carbon_rho_ci['물소모'],{rho:.32,lo:.15,hi:.49,n:163});
});
