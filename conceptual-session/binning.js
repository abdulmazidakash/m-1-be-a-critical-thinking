// ============ student login binning (30 min interval) ==

const logins = [
  { timestamp: '2025-11-07T09:12:00Z', student: 'Shakib' },
  { timestamp: '2025-11-07T09:35:00Z', student: 'Akash' },
  { timestamp: '2025-11-07T10:05:00Z', student: 'Rina' },
  { timestamp: '2025-11-07T10:25:00Z', student: 'Tariq' },
  { timestamp: '2025-11-07T10:50:00Z', student: 'Mina' }
];

const interval = 30 * 60 * 1000 // 1800000 ms

const binningRange = (timestamp) =>{
	const date = new Date(timestamp);
	// console.log(date);
  const floored = Math.floor(date.getTime() / interval) * interval;

  return new Date(floored).toISOString();
};

// console.log(binningRange('2025-11-07T10:25:00Z'));

const binnedTable = logins.reduce((acc, login)=>{
  const bin = binningRange(login.timestamp);
  // console.log(bin);

  if(!acc[bin]){
    acc[bin] = { total: 0 };
  } 
  acc[bin].total += 1;
  
  return acc;
}, {});

console.log(binnedTable);