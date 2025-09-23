
PHDList = [
     {
        "year": "2025",
        "names": "Nan Zhang, Haojie,Jian"
    }, {
        "year": "2024",
        "names": "Yanqi Pan, DZIKANYANGA GRADWELL"
    },
    {
        "year": "2023",
        "names": "Hao Huang, Jia Sun"
    },
    {
        "year": "2022",
        "names": "Cai Deng, Haoliang Tan",
    },
    {
        "year": "2021",
        "names": "Hao Hu",
    },
    {
        "year": "2019",
        "names": "Donglei Wu, Xiangyu Zou",
    },
]

MasterList = [
     {
        "year": "2025",
        "names": "Wenhao Ou, Yuchen Shan, Mingzheng Jin, Shengjie Zhao"
    },
    {
        "year": "2024",
        "names": "Shihao Wang, Peixin Zeng, Darong Yang, Baiju Chen, Jiahao Chen, SANJEEB K C"
    },
    {
        "year": "2023",
        "names": "Zili Ye, Qiyang Zheng, Weihao Yang, Yifeng Zhang"
    },
    {
        "year": "2022",
        "names": "Yanqi Pan, Dingbang Liu, Jiarui Wang, Yunsheng Dong, Yufan Chen"
    },
    {
        "year": "2021",
        "names": "Yang Shi, Han Xu, Zhaoshuo Wan Bin, Wenkai Liang"
    },
    {
        "year": "2020",
        "names": "Jingsong Yuan, Can Wei, Haoyu Jin, Qi Chen, Lifeng Pu"
    },
    {
        "year": "2019",
        "names": "Cai Deng, Haoliang Tan, Xiaojia Huang, Shuyu Zhang"
    },
    {
        "year": "2018",
        "names": "Yuan He, Zhenbo Hu"
    }
]

function gen_basic_list_for_team(listName, list) {
    document.querySelector(listName).innerHTML = list.map(item => {
        return `<li>
                    <p>
                        ${item.year}: ${item.names}
                    </p>
                </li>`
    }).join("\n")
}

gen_basic_list_for_team("#PHDList", PHDList)

gen_basic_list_for_team("#MasterList", MasterList)

// document.querySelector("#FacultyList").innerHTML = FacultyList.map(item => {
//     return `<li>
//                 <p>
//                     ${item.name} (${item.email})
//                 </p>
//             </li>`
// }).join("\n")
