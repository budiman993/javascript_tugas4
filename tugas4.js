var s1 = 170;
var s2 = 185;
var s3 = 175;

if (s1 > s2){
  if(s1 > s3){
    console.log("Siswa ke-1 tertinggi, dengan tinggi :", s1)
  }
}else if (s2>s1){
  if (s2>s3){
    console.log("Siswa ke-2 tertinggi, dengan tinggi :", s2)
  }else{
    console.log("Siswa ke-3 tertinggi, dengan tinggi :", s3)
  }
}

if(s1>s2)
{
  if(s1>s3)
  {
    if(s3>s2)
    {
      console.log("Urutan tinggi siswa : ", s1,s3,s2)
    }
    else
    {
      console.log("Urutan tinggi siswa : ", s1,s2,s3)
    } 
  }
  else
  {
    console.log("Urutan tinggi siswa : ", s3,s1,s2)
  }
    
}
else if(s2>s3)
{
  if(s3>s1)
  {
    console.log("Urutan tinggi siswa : ", s2,s3,s1)
  }
  else
  {
    console.log("Urutan tinggi siswa : ", s2,s1,s3)
  }
}
else
{
  console.log("Urutan tinggi siswa : ", s3,s2,s1)
}