
import axios from "axios"

// פונקציה לבדיקת זמינות השרת
export const checkServerHealth = async (): Promise<boolean> => {
  try {
    // ניסיון לגשת לנתיב קיים בשרת
    await axios.get("http://localhost:8080/api/category")
    return true
  } catch (error) {
    console.error("Server health check failed:", error)
    return false
  }
}
