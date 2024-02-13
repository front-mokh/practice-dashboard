import { fetchCustomers } from "@/lib/data"


type Customer = {
    first_name: string,
    last_name: string,
    email: string
}
export default async function CustomersPage() {
    const customers = await fetchCustomers();
    return (
        <div>
            <h1>Customers</h1>
            <ul>{customers.map((customer: Customer) => (
                <li>{customer.first_name + " " + customer.last_name}</li>
            ))}</ul>
        </div>
    )
}
