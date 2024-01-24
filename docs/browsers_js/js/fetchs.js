// // fetch() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`${error.message}`)
//     }
// }

// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=gztq8jFjeXzmvo33IagHrwAmpXVxq4EbG83hYPU2%2BLdnVx2op%2BPf7oR3UglxR%2FRDARoAIg06ik3wWwPf6LK%2BWQ%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`;
    let options = {}; // python dict 유사
    try {
        let response = await fetch(url, options) // send

        let result = await response.json(); // 응답

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents");
        contents.innerHTML = result["header"]["resultMsg"];

    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});






// datalab_shoppinginsite from naver api
let shopping_insite = document.querySelector("#datalab_shoppinginsite");
shopping_insite.addEventListener('click', async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
    let data = {
        "startDate": "2023-08-01",
        "endDate": "2023-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      }
    let options = {
        method : "POST"
        , headers : {
            "X-Naver-Client-Id":"2QSWA6M64rRK6xqbwmfZ"
            , "X-Naver-Client-Secret":"ofRjlO0Evx"
            , "Content-Type":"application/json"
        }
        , body : JSON.stringify(data)
    }; // python dict 유사
    try {
        let response = await fetch(url, options) // send

        let result = await response.json(); // 응답

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#datalab_shoppinginsite_contents");
        contents.innerHTML = result["endDate"];

    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});
