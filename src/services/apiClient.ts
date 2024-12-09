import axios from "axios";

export default axios.create({
    baseURL : "https://searchia.ir/api/index",
    headers: {
        apikey: "mLpqZlvuCXk1vypda5givd5GqgCyDi8u",
      },
})