//nested obj destructering
const school = {infomation: {
    general: {
        schoolName: 'Taweetha',
        address: 'Soi 42'
    }
}}

let {infomation: {general: {schoolName:Name, address}}} = school

// console.log(schoolName)
console.log(Name)
console.log(address)

console.log('-------------------------------')

//nested obj in array destructering
const schoolArr = [{infomation: {
    general: {
        schoolName: 'Taweetha',
        address: 'Soi 42'
    }
}
},
{infomation: {
    general: {
        schoolName: 'Santacruz',
        address: 'Soi 2'
    }
}
},
{infomation: {
    general: {
        schoolName: 'JPW',
        address: 'taksin'
    }
}
}]

let [,{infomation: {general: {schoolName, address:add}}}] = schoolArr
//ใส่ , คอมม่าคั่นคือเอาตำแหน่งถัดไป
console.log(schoolName)
console.log(address)