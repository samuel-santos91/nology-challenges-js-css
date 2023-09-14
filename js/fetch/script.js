const getRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api");
  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
  console.log(data.results)
  return data.results;
};

const addNameToDom = (name, age, gender, picture) => {
  const h2 = document.querySelector("h2");
  h2.textContent = name;

  const userAge = document.getElementById("age");
  userAge.textContent = age;
  
  const userGender = document.getElementById("gender")
  userGender.textContent = gender;

  const userPicture = document.getElementById("picture")
  userPicture.src = picture
};

document.querySelector("button").addEventListener("click", async () => {
  const user = await getRandomUser();
  const { first, last } = user[0].name;
  addNameToDom(`${first} ${last}`, user[0].dob.age, user[0].gender, user[0].picture.large);
});
