"use server"
import { cookies } from "next/headers";
export const isAuthorized = async () => {
    const cookieStore = await cookies();
    const userSession = cookieStore.get("user_session");
    let uerInfo = null;
    if (userSession) {
        try {
            uerInfo = JSON.parse(userSession.value);
        } catch (e) {
            console.log("Error parsing user session cookie:", e);
            return null;
        }
    }
    return uerInfo;
}