export default function handler(req, res) {
  fetch('http://backend-service:8000/api/list-memos/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      return response.json()
    })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch data' })
    })
}
