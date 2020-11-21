const appKey = 'aaa953136447_1581225655877'

export function getAllStud () {
  return fetch(`/api/student/findAll?appkey=${appKey}`).then(res => res.json())
}

export function getFindPage (page = 1, size = 10) {
  return fetch(`/api/student/findByPage?appkey=${appKey}?page=${page}&size=${size}`)
}

export async function mockAllStud (page = 1, limit = 10) {
  const arr = [
    { name: '1号', sex: 1, id: 0 },
    { name: '2号', sex: 1, id: 1 },
    { name: '3号', sex: 1, id: 2 },
    { name: '4号', sex: 1, id: 3 },
    { name: '5号', sex: 0, id: 4 },
    { name: '6号', sex: 1, id: 5 },
    { name: '7号', sex: 0, id: 6 },
    { name: '8号', sex: 0, id: 7 },
    { name: '9号', sex: 9, id: 8 },
    { name: '10号', sex: 10, id: 9 },
    { name: '11号', sex: 11, id: 10 },
    { name: '12号', sex: 12, id: 11 },
    { name: '13号', sex: 13, id: 12 },
    { name: '14号', sex: 2, id: 13 },
    { name: '15号', sex: 3, id: 24 },
    { name: '16号', sex: 4, id: 35 },
    { name: '17号', sex: 5, id: 46 },
    { name: '18号', sex: 6, id: 57 },
    { name: '19号', sex: 7, id: 68 },
    { name: '20号', sex: 8, id: 79 },
    { name: '21号', sex: 9, id: 80 },
    { name: '22号', sex: 10, id: 91 },
    { name: '23号', sex: 11, id: 102 },
    { name: '23号', sex: 12, id: 112 },
  ]
  return {
    data: arr.slice((page - 1) * limit, page * limit),
    total: arr.length
  }
}