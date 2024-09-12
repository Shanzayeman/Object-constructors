function Person( first , last , color , age){
    this.firstName = first;
    this.lastName=last;
    this.eyeColor=color;
    this.age="20";
}

const saadSaleem = new Person("Amina", "saleem", "blue");
document.getElementById('one').innerHTML=
("MY pharand name is " + saadSaleem.firstName + " " +saadSaleem.lastName + "." );

const shanzayEman = new Person("Shanzay" ,"eman" , "green");
document.getElementById('two').innerHTML=
("MY name is " + shanzayEman.firstName + " " + shanzayEman.lastName + "." );


const hira = new Person("Hira" ,"asghar" , "green");
hira.nationality="English";
document.getElementById('three').innerHTML=
("MY age is " + hira.age+ "." + "And my nationality is " + hira.nationality + ".");
