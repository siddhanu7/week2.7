function animal()
{
    console.log ("cat is a beautiful animal");
}

animal();
animal();






function fun(name,age)
 {
    console.log("hi", name,"your age is",age);
    
}
 
fun("sid",47);
fun("anu",30);


function reptile(a,b)
{
    var c;
    c=a*b/2
    console.log(c);
}

reptile(3,4);
reptile(8,10);

function newavg(a,b,c) 
{
 var d;
 d=a*b*c/3;
 return d;   
}

var avg=newavg(34,47,74);
console.log(avg);
var avg1=newavg(50,60,70);
console.log(avg1);

if (avg>avg1) 
{
  console.log("firstavg is bigger") ;   
} else {
    console.log("secondavg is bigger") ;
    
}


let teachers = ['Shane', 'Zack'];

console.log(teachers[0]);
console.log(teachers);

teachers.push("ravi");
console.log(teachers);
teachers.pop();
console.log(teachers);

teachers.unshift("ravi");
console.log(teachers);


teachers[3] = 'anu'; 
console.log(teachers);
teachers[4] = 'sid'; ;
console.log(teachers);
var anu=teachers.indexOf('anu');
console.log(anu);

var sid=teachers.slice(1,3);
console.log(sid);

var divij=teachers.splice(2,4,'ram','sita');
console.log(divij);

var students=['anu','divij','daiwik'];
/*
for (let i = 0; i < students.length; i++) 
{
    console.log (students[i],'is an excelent student');
    
}

*/

students.forEach(function(item, index)
 {
	console.log(item, index);
});

students.toString();
console.log(students.toString());

console.log(students.join('&'));

console.log(students.sort());


console.log(students.reverse());

var shoppinglist=['pop tarts', 'ramen noodles', 'chips', 'salsa',  'coffee'];
console.log(shoppinglist);

shoppinglist.push( 'fruit loops');
console.log(shoppinglist);

shoppinglist[4]= 'fair trade coffee';
console.log(shoppinglist);
shoppinglist[2]= 'rice';
shoppinglist[3]= 'beans';
console.log(shoppinglist);
var shoppingcart=[];



shoppingcart[0]=shoppinglist.pop();
console.log(shoppingcart);
shoppingcart[1]=shoppinglist.shift();
console.log(shoppingcart);
console.log(shoppinglist);

var i=0;
while (i<shoppinglist.length)
{
shoppingcart[2+i]=shoppinglist[i];
i=i+1;
}
console.log(shoppingcart);

/*
for (let index = 0; index < shoppinglist.length; index++) {
    shoppingcart[index+2]=shoppinglist[index]
    
}
*/


console.log(shoppingcart.sort());
console.log(shoppingcart.reverse());
console.log(shoppingcart.toString());


var array1=[2,4,6,8,10,12];
var array2=[12,14,16];
// array1=[2,4,6,8,10,12,12,14,16];
for (let i = 0; i < array2.length; i++) {
    
array1[i+6]=array2[i];
}
console.log(array1);

for (let index = 0; index < 11; index=index+1)
 {
    //console.log(index);
    if (index%2==0) 
    {
        console.log(index ,'is even');
       
    }
    else
    {
        console.log(index ,'is odd');
       
    }
}

/*
var p=0
while(p<11)
{
    console.log(p);
    p=p+2

}
*/



let city={
    name:'charlotte',
    population:200000,
    state:'nc',
    goodstate:true,
    importantplaces:['Ballantyne', 'Matthews', 'Waxhaw'] 


}

city.name="Atlanta";
delete city.polpulation;

console.log(city.name);
console.log(city.importantplaces[0]);

/*
let course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		}
	]
};
console.log(course.students[0].computer.OS)
//console.log(course.students[0].computer.OS);
*/

let course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

console.log(course.name);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
console.log(course.preReqs);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions.join(' or '));
