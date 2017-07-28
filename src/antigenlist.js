const suggestions = [
    {
        label: "A",
        name: "A Antigen",
        system: "ABO",
        isbt: "001.001",
        comments: "Serum from group A patients contains naturally occuring anti-B.",
        features: {
            "Enzyme reactivity": "Resistant to all.",
            "Antigen expression": "Weak on cord cells. Altered in some disease states",
            "Immunoglobulin class": "IgM; IgG",
            "Optimal testing technique": "Room temp or below",
            "Neutralization": "Saliva from A secretors",
            "Complement Binding": "Yes; some hemolytic",
            "Transfusion Reactions": "None to severe, immediate/delayed, intravascular/extravascular",
            "Hemolytic Disease of the Newborn": "None to moderate",
            "Autoantibody formation": "Rare"
        },
        occurence: [
            {name: "Caucasian", value: 43},
            {name: "Black", value: 27},
            {name: "Asian", value: 28},
            {name: "Mexican", value: 28},
            {name: "South American", value: 0.1}
        ]
    },
    {
        label: "B",
        system: "ABO",
        isbt: "001.002",
        comments: "Serum from group A patients contains naturally occuring anti-B.",
        features: {
            "Enzyme reactivity": "Resistant to all.",
            "Antigen expression": "Weak on cord cells. Altered in some disease states",
            "Immunoglobulin class": "IgM; IgG",
            "Optimal testing technique": "Room temp or below",
            "Neutralization": "Saliva from B secretors",
            "Complement Binding": "Yes; some hemolytic",
            "Transfusion Reactions": "None to severe, immediate/delayed, intravascular/extravascular",
            "Hemolytic Disease of the Newborn": "None to moderate",
            "Autoantibody formation": "Rare"
        },
        occurence: [
            {name: "Caucasian", value: 9},
            {name: "Black", value: 20},
            {name: "Asian", value: 27},
            {name: "Mexican", value: 13},
            {name: "South American", value: 0.1}
        ]
    },
    {
        label: "A1",
        system: "ABO",
        isbt: "001.004",
        comments: `Transferase activity in A1 individuals is 5-10 times higher than A2 (A1-) individauls. 
                   Anti-A1 can be prepared from Dolichos biflorus. Demographic data excludes AB.`,
        features: {
            "Enzyme reactivity": "Resistant",
            "Antigen expression": "Weakly developed on cords.",
            "Immunoglobulin class": "IgM more common than IgG",
            "Optimal testing technique": "RT or below",
            "Neutralization": "Saliva from A secretors",
            "Complement Binding": "Rare",
            "Transfusion Reactions": "None to mild, delayed",
            "Hemolytic Disease of the Newborn": "No",
            "Autoantibody formation": "Rare",
        },
        occurence: [
            {name: "Caucasian", value: 34},
            {name: "Black", value: 19},
            {name: "Asian", value: 27}
        ]
    }
]

export default suggestions;