export default async function fetchUsers(req, res) {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500, error);
  }
}
