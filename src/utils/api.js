/**
 *
 * @param {string} method - HTTP METHOD
 * @param {string} endpoint - API ENDPOINT
 * @param {object} data - DATA TO FETCH
 * @returns
 */
export const Api = async (method, endpoint, data) => {
  try {
    const config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        credentials: true,
      },
      credentials: "include",
    };

    data && (config.body = JSON.stringify(data));

    const response = await fetch(
      `http://localhost:3000/api/v1${endpoint}`,
      config
    );

    const res = await response.json();

    return res;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
