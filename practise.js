let data = {
    sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ],

    }
}
// 1) How will you access Sophia’s secondary school location?
console.log(data.sophia.study[1].secondary[0].school_name);




