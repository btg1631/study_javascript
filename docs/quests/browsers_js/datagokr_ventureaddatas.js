// window.onload = async () => {
//     let url = `https://apis.data.go.kr/B552898/trusts/getTrustList?numOfRows=20&pageNo=1&serviceKey=gztq8jFjeXzmvo33IagHrwAmpXVxq4EbG83hYPU2%2BLdnVx2op%2BPf7oR3UglxR%2FRDARoAIg06ik3wWwPf6LK%2BWQ%3D%3D`;
//     let options = {};
//     try {
//         let response = await fetch(url, options) // send
//         let result = await response.json(); // 응답
//         let data_array = result.response.body.items;
        
//         let data_list = "";
//         for (let data_object of data_array.slice(0,10)) {
//             data_list += `<tr><td>${data_object["BRDC_YMD"]}</td>
//             <td>${data_object["TPBIZ_NM_1"]}</td>
//             <td>${data_object["TPBIZ_NM_2"]}</td>
//             <td>${data_object["TPBIZ_NM_3"]}</td>
//             <td>${data_object["TRST_RNG"]}</td></tr>`;
//         }

//         let data_element = document.querySelector("#data_id");
//         data_list = `${data_list}`;
//         data_element.innerHTML = data_list;

//         let data_list2 = "";
//         for (let data_object of data_array.slice(10, 21)){
//             data_list2 = `${data_list2}<tr><td>${data_object["BRDC_YMD"]}</td>
//             <td>${data_object["TPBIZ_NM_1"]}</td>
//             <td>${data_object["TPBIZ_NM_2"]}</td>
//             <td>${data_object["TPBIZ_NM_3"]}</td>
//             <td>${data_object["TRST_RNG"]}</td></tr>`;
//         }

//         let event_click_next = document.querySelector("#next");
//         event_click_next.addEventListener('click', (event) => {
//             let next = document.querySelector("#data_id");
//             data_list2 = `${data_list2}`;
//             next.innerHTML = data_list2
//         })

//         let event_click_previous = document.querySelector("#previous");
//         event_click_previous.addEventListener('click', (event) => {
//             let previous = document.querySelector("#data_id");
//             data_list = `${data_list}`;
//             previous.innerHTML = data_list
//         })
        
//     } catch (error) {
//         console.log(`Error Message : ${error.message}`)
//     }
// };


let Page = 1;
let url = `https://apis.data.go.kr/B552898/trusts/getTrustList?&numOfRows=10&pageNo=${Page}&serviceKey=gztq8jFjeXzmvo33IagHrwAmpXVxq4EbG83hYPU2%2BLdnVx2op%2BPf7oR3UglxR%2FRDARoAIg06ik3wWwPf6LK%2BWQ%3D%3D`;
let options = {};
async function pagination(page) {
    let response = await fetch(`${url}&pageNo=${page}`, options); // send
    let result = await response.json(); // 응답
    let data_array = result.response.body.items;

    let data_list = "";
    for (let data_object of data_array) {
        data_list = `${data_list}<tr><td>${data_object["BRDC_YMD"]}</td>
        <td>${data_object["TPBIZ_NM_1"]}</td>
        <td>${data_object["TPBIZ_NM_2"]}</td>
        <td>${data_object["TPBIZ_NM_3"]}</td>
        <td>${data_object["TRST_RNG"]}</td></tr>`;
    }

    let data_element = document.querySelector("#data_id");
    data_element.innerHTML = data_list;
}

pagination(Page);

let event_click_next = document.querySelector("#next");
    event_click_next.addEventListener('click', (event) => {
    Page += 10;
    pagination(Page);        
});

let event_click_previous = document.querySelector("#previous");
event_click_previous.addEventListener('click', (event) => {
    if (Page > 1) {
        Page -= 10;
        pagination(Page);
    }
});

