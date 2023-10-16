FacultyList = [
    {
        "name": "Wen Xia",
        "email": "xiawen@hit.edu.cn"
    },
    {
        "name": "Shiyi Li",
        "email": "lishiyi@hit.edu.cn"
    },
    {
        "name": "Xiangyu Zou",
        "email": "zouxiangyu@hit.edu.cn"
    },
    {
        "name": "Xuedan Yao",
        "email": "hitsystem@hotmail.com"
    }
]

PHDList = [
    {
        "year": "2023",
        "names": "Hao Huang"
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
        "year": "2024",
        "names": "Peixin Zeng, Darong Yang, Boju Chen, Jiahao Chen, Xincong Lin, Zhichao Yang"
    },
    {
        "year": "2023",
        "names": "Yangqi Zheng, Weihao Yang, Yifeng Zhang, Zili Ye, Juehao Chen"
    },
    {
        "year": "2022",
        "names": "Yanqi Pan, Dingbang Liu, Jiarui Wang, Yunsheng Dong, Yufan Chen, Shuaipeng Zhang"
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

document.querySelector("#FacultyList").innerHTML = FacultyList.map(item => {
    return `<li>
                <p>
                    ${item.name} (${item.email})
                </p>
            </li>`
}).join("\n")