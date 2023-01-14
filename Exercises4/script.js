// question 1
const users = [
	"Lea123","Princess45","cat&doglovers","helooo@000"];

if(users.length === 0)
{
	console.log("personne n'est en ligne");
} 
else if(users.length === 1)
{
	console.log(users[0] + " est en ligne");
}
else if (users.length === 2)
{
 console.log ( users[0]+"et"+users[1] + " sont connectés")
}
else {
	console.log(users[0]+","+users[1]+" et " + (users.length - 2) + " sont en ligne")
}