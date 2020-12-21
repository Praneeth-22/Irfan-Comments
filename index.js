
function addItems(n,m,s,t){
   let ul=document.querySelector("#msg")
   let name=document.createElement('h2')
   let subject=document.createElement('h3')
   let mail=document.createElement('h4')
   let text=document.createElement('h4')
   let hr=document.createElement('hr')
   name.innerHTML=`Name: ${n}`
   subject.innerHTML=`Subject: ${s}`
   mail.innerHTML=`mail: ${m}`
   text.innerHTML=`comment: ${t}`
   text.setAttribute("id","text")
   ul.appendChild(name)
   ul.appendChild(mail)
   ul.appendChild(subject)
   ul.appendChild(text)
   ul.appendChild(hr)

   
}
