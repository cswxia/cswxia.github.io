teachings = [ 
    {
        "title": "Operating Systems",
        "year": "2019, 2020, 2021, 2022, 2023",
    },
    {
        "title": "Computer Systems (CSAPP)",
        "year": "2020, 2021, 2022, 2023",
    },
   
    {
        "title": "Data Storage and Management in the Internet of Things",
        "year": "2016, 2015",
    },
    {
        "title": "<em>Operating Systems Design and Analysis</em>",
        "year": "2015",
    }
]

document.querySelector("#TeachList").innerHTML = teachings.map(teaching => {
    return `<li>
                <p>
                    ${teaching.title}, ${teaching.year}
                </p>
            </li>`
}).join("\n")
