useEffect(() => {
    console.log("start");
     const config = {
       headers: { 
         "Authorization": `Bearer ${token}` ,
         "Content-Type": "application/json"
       }
     };
     const url = `https://api.zoom.us/v2/users/${userId}/meetings`;
     var d = AddMinutesToDate(new Date(), 30);
     console.log("++++++ date ---------------");
     console.log(d);
     console.log(d.toISOString());
     const bodyParameters = {
       "topic": "Demo Meeting 1",
       "type": "",
       "start_time": d.toISOString(),
       "duration": "30",
       "timezone": "Asia/Calcutta",
       "password": "P@55w0rd",
       "agenda": "testing",
       "settings": {
           "host_video": true,
           "participant_video": true,
           "join_before_host": true,
           "mute_upon_entry": true,
           "use_pmi": false,
           "approval_type": 0
         }
     }
     
     
     
     
     
     
   
 
     axios.post( 
               url,
               bodyParameters,
               config
             )
             .then(res => {
               console.log("__________ axios success ________________");
               console.log(res);
               // var jsonlog = JSON.stringify(JSON.parse(res),null,2);  
               // console.log(jsonlog);
             }).catch(err => {
               console.log("__________ axios fail ________________");
               console.log(err);
             });
   
   });