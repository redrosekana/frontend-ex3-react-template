const URL= "http://localhost:3004/"

export default async function FetchData(menu) {
    try {
        const response = await fetch(URL+menu)
        const result = await response.json()
        return result
    }catch(err) {
        console.log(err)
    }
}