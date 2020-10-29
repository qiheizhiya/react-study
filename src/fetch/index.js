export function getAllStud () {
  return fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=aaa953136447_1581225655877&page=1&size=9999`).then(res => res.json())
}