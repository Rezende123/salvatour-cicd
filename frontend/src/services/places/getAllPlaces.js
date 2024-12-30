import axios from "axios";
import { ALL_PLACES_ENDPOINT } from "../../constants/urls";

export function getAllPlaces(accessToken) {
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          };

          axios
            .get(
                ALL_PLACES_ENDPOINT,
                header
            )
            .then((response) => {
                if (response.status == 200) {
                    // console.log(response.data)
                    resolve(response.data)
                } else {
                    reject(response)
                }
            })
            .catch((error) => {
                reject(error)
            })
    }, 20000)
}