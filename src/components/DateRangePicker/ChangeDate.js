const ChangeDate = ({ period }) => {
  // console.log("period", period);
  let sdy = period.startDate.getFullYear();
  let sdm = period.startDate.getMonth();
  let sdd = period.startDate.getDate();

  let edy = period.endDate.getFullYear();
  let edm = period.endDate.getMonth();
  let edd = period.endDate.getDate();
  return <div>{`${sdy}.${sdm + 1}.${sdd} ~ ${edy}.${edm + 1}.${edd}`}</div>;
};

export default ChangeDate;
