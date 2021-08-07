export const sendForm = ({ Name, Email, Message }) => {
  const formValues = {
    name: Name,
    email: Email,
    message: Message,
  }
  let formRequest = new XMLHttpRequest()
  formRequest.open("POST", "https://arctindev-formapp.herokuapp.com/")
  formRequest.setRequestHeader("content-type", "application/json")
  formRequest.onload = () => {
    if (formRequest.responseText === "success") {
      console.log(`Email send`)
    } else {
      console.log("Email not Send")
    }
  }
  formRequest.send(JSON.stringify(formValues))
}
