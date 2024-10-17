class Activity{
  constructor(id,title,description,imgUrl){
    this.title=title 
  }
}

class Repository{
  constructor(){
    this.activities= []
    this.idCounter=0;
  }

  getAllActivities(){
    return this.activities;
  }

  createActivity(activity){
    this.activities.push(activity);
    const {id,title,description,imgUrl}=activity;
    const activitylist = document.getElementById('actividades-lista');
    const activitycard = document.createElement('div');
    activitycard.id=id
    activitycard.className = 'actividad-card';
    activitycard.innerHTML = `
      <img src="${imgUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
    `;
    activitylist.appendChild(activitycard);
    }

  deleteActivity(id){
    const index = this.activities.findIndex((activity)=>activity.id==id)
    this.activities.splice(index,1);
  }


}
const repo = new Repository();

const addHandler= (event)=>{
  event.preventDefault();
  const activity = new Activity()
  activity.id= repo.idCounter++;
  activity.title = document.getElementById('titulo').value;
  activity.description = document.getElementById('descripcion').value;
  activity.imgUrl = document.getElementById('imagen-url').value;
  repo.createActivity(activity)
}

document.getElementById('actividad-form').addEventListener('submit', addHandler);







