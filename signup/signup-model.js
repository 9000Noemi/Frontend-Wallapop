export async function createUser(email, password) {

    try {

        const response = await fetch("http://localhost:8000/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: email,
                password
            }),
            headers: {
                "Content-type": "application/json"
            }
        });


    } catch (error) {
        throw new Error(error.message)
    }
}