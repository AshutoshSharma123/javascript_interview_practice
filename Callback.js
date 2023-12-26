const printfirstname = (f_name, cb) => {
    console.log(f_name)
    cb("Sharma")
}



const printlastname = (l_name) => {
    console.log(l_name);
}
printfirstname("Ashutosh", printlastname)