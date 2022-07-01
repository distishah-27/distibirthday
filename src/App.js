import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';
import { useState } from 'react';
function App() {
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState('');
  const [d, setd] = useState('');
  const [e, sete] = useState('');
  const [f, setf] = useState('');
  const [g, setg] = useState('');
  const [h, seth] = useState('');
  const [i, seti] = useState('');
  const [j, setj] = useState('');
  const [k, setk] = useState('');
  const [l, setl] = useState('');
  const [m, setm] = useState('');
  const [n, setn] = useState('');
  const [o, seto] = useState('');
  const [p, setp] = useState('');
  const [q, setq] = useState('');
  const [r, setr] = useState('');
  const [s, sets] = useState('');
  const [t, sett] = useState('');
  const [u, setu] = useState('');
  const [v, setv] = useState('');
  const [w, setw] = useState('');
  const [x, setx] = useState('');
  const [y, sety] = useState('');
  const [z, setz] = useState('');
  const handlea = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      seta(event.target.value.toLowerCase());
    }
  };
  const handleb = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setb(event.target.value.toLowerCase());
    }
  };
  const handlec = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setc(event.target.value.toLowerCase());
    }
  };
  const handled = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setd(event.target.value.toLowerCase());
    }
  };
  const handlee = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      sete(event.target.value.toLowerCase());
    }
  };
  const handlef = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setf(event.target.value.toLowerCase());
    }
  };
  const handleg = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setg(event.target.value.toLowerCase());
    }
  };
  const handleh = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      seth(event.target.value.toLowerCase());
    }
  };
  const handlei = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      seti(event.target.value.toLowerCase());
    }
  };
  const handlej = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setj(event.target.value.toLowerCase());
    }
  };
  const handlek = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setk(event.target.value.toLowerCase());
    }
  };
  const handlel = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setl(event.target.value.toLowerCase());
    }
  };
  const handlem = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setm(event.target.value.toLowerCase());
    }
  };
  const handlen = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setn(event.target.value.toLowerCase());
    }
  };
  const handleo = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      seto(event.target.value.toLowerCase());
    }
  };
  const handlep = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setp(event.target.value.toLowerCase());
    }
  };
  const handleq = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setq(event.target.value.toLowerCase());
    }
  };
  const handler = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setr(event.target.value.toLowerCase());
    }
  };
  const handles = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      sets(event.target.value.toLowerCase());
    }
  };
  const handlet = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      sett(event.target.value.toLowerCase());
    }
  };
  const handleu = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setu(event.target.value.toLowerCase());
    }
  };
  const handlev = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setv(event.target.value.toLowerCase());
    }
  };
  const handlew = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setw(event.target.value.toLowerCase());
    }
  };
  const handlex = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setx(event.target.value.toLowerCase());
    }
  };
  const handley = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      sety(event.target.value.toLowerCase());
    }
  };
  const handlez = event => {
    if(event.target.value.length === 1 && event.target.value.match(/[a-z]/i))
    {
      setz(event.target.value.toLowerCase());
    }
  };
  var m1 = "Happy happy happy birthday distu I love you so much. You are one of my closest friends and the only reason I survived JNS. I am glad I was able to tear down the walls you built around yourself because you are one of the coolest and funniest and most loveable people I know. We have done so much shit together and there is no one else I would want to go for walks with, no one else I would want to drink with and no one else that I can trust with all my heart. I am so proud of the person you have become and you truly deserve all the happiness in the world ! Thank you for being a part of my life. HBD twin I love you."
  var m2 = "Hii Disti, wishing you many many happy returns of the day. I hope you have an amazing day and many many more amazing years ahead. School would not have been the same without you. Love you !"
  var m3 = "Happy birthday Disti. We have been friends for so long but have more memories and than photos. Our drives are too fun. Oh dough jate hai jaldhi."
  var m4 = "tu, ja."
  var m5 = "Hey pumpkin, you are twenty now, five to seven years back we had own business and now all we do is make reels and gossip. I gotta say we have grown alot. I have never been good expressing but I will say this, you are not only my best friend but my wife, sister and family. If I had to dedicate a song to you it would be 'Jaane Kyu'. To many more long drives, judging people, gossiping, making reels, having our own business. Thank you for being a part of my madness. Laughing with you is my coping up mechanism. Disti, you deserve the world. Do not let anyone else tell you otherwise. Kill it bbg. Happiest twentieth Birthday baby."  
  var m6 = "Heyyyy Disti, we have beeen friends forever nowww, we may not have any pictures, but we have hundreds of memories together, the drives, badminton, terrace and many more ! I am very glad to have a friend like you, keep smiling always ! Love you ! Happppyyyyyyy birthdayyy, party kyaa chee ?"
  var m7 = "Random text Random text Random text Random text Random text Random text Random text"
  var m8 = "Random text Random text Random text Random text Random text Random text Random text"
  var m9 = "abcdefghijklmnopqrstuvwxyz &-#$ ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var encode = (data) => {
    var result = ''
    var ii = 0
    var letter = ''
    var temp = ''
    for (ii=0;ii<data.length;ii++)
    {
      letter = data[ii]
      if (letter === 'a')
      {
        temp = 'l'
      }
      else if (letter === 'A')
      {
        temp = 'L'
      }
      else if (letter === 'b')
      {
        temp = 'w'
      }
      else if (letter === 'B')
      {
        temp = 'W'
      }
      else if (letter === 'c')
      {
        temp = 'k'
      }
      else if (letter === 'C')
      {
        temp = 'K'
      }
      else if (letter === 'd')
      {
        temp = 'm'
      }
      else if (letter === 'D')
      {
        temp = 'M'
      }
      else if (letter === 'e')
      {
        temp = 'b'
      }
      else if (letter === 'E')
      {
        temp = 'B'
      }
      else if (letter === 'f')
      {
        temp = 'x'
      }
      else if (letter === 'F')
      {
        temp = 'X'
      }
      else if (letter === 'g')
      {
        temp = 'u'
      }
      else if (letter === 'G')
      {
        temp = 'U'
      }
      else if (letter === 'h')
      {
        temp = 'j'
      }
      else if (letter === 'H')
      {
        temp = 'J'
      }
      else if (letter === 'i')
      {
        temp = 'z'
      }
      else if (letter === 'I')
      {
        temp = 'Z'
      }
      else if (letter === 'j')
      {
        temp = 'p'
      }
      else if (letter === 'J')
      {
        temp = 'P'
      }
      else if (letter === 'k')
      {
        temp = 'a'
      }
      else if (letter === 'K')
      {
        temp = 'A'
      }
      else if (letter === 'l')
      {
        temp = 'd'
      }
      else if (letter === 'L')
      {
        temp = 'D'
      }
      else if (letter === 'm')
      {
        temp = 'y'
      }
      else if (letter === 'M')
      {
        temp = 'Y'
      }
      else if (letter === 'n')
      {
        temp = 'v'
      }
      else if (letter === 'N')
      {
        temp = 'V'
      }
      else if (letter === 'o')
      {
        temp = 't'
      }
      else if (letter === 'O')
      {
        temp = 'T'
      }
      else if (letter === 'p')
      {
        temp = 'h'
      }
      else if (letter === 'P')
      {
        temp = 'H'
      }
      else if (letter === 'q')
      {
        temp = 'n'
      }
      else if (letter === 'Q')
      {
        temp = 'N'
      }
      else if (letter === 'r')
      {
        temp = 'o'
      }
      else if (letter === 'R')
      {
        temp = 'O'
      }
      else if (letter === 's')
      {
        temp = 'q'
      }
      else if (letter === 'S')
      {
        temp = 'Q'
      }
      else if (letter === 't')
      {
        temp = 'c'
      }
      else if (letter === 'T')
      {
        temp = 'C'
      }
      else if (letter === 'u')
      {
        temp = 'f'
      }
      else if (letter === 'U')
      {
        temp = 'F'
      }
      else if (letter === 'v')
      {
        temp = 's'
      }
      else if (letter === 'V')
      {
        temp = 'S'
      }
      else if (letter === 'w')
      {
        temp = 'r'
      }
      else if (letter === 'W')
      {
        temp = 'R'
      }
      else if (letter === 'x')
      {
        temp = 'i'
      }
      else if (letter === 'X')
      {
        temp = 'I'
      }
      else if (letter === 'y')
      {
        temp = 'e'
      }
      else if (letter === 'Y')
      {
        temp = 'E'
      }
      else if (letter === 'z')
      {
        temp = 'g'
      }
      else if (letter === 'Z')
      {
        temp = 'G'
      }
      else
      {
        temp = letter
      }
      result = result + temp
    }
    return result
  }
  m1 = encode(m1)
  m2 = encode(m2)
  m3 = encode(m3)
  m4 = encode(m4)
  m5 = encode(m5)
  m6 = encode(m6)
  m7 = encode(m7)
  m8 = encode(m8)
  m9 = encode(m9)
  const decode = () => {
    var vals = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
    var tempop = ''
    var letop = ''
    var jj = 0
    var intop = ''
    for(jj=0;jj<m1.length;jj++)
    {
      letop = m1[jj]
      if(vals[0] !== '' && letop === 'a')
      {
        intop = vals[0]
      }
      else if(vals[0] !== '' && letop === 'A')
      {
        intop = vals[0].toUpperCase()
      }
      else if(vals[1] !== '' && letop === 'b')
      {
        intop = vals[1]
      }
      else if(vals[1] !== '' && letop === 'B')
      {
        intop = vals[1].toUpperCase()
      }
      else if(vals[2] !== '' && letop === 'c')
      {
        intop = vals[2]
      }
      else if(vals[2] !== '' && letop === 'C')
      {
        intop = vals[2].toUpperCase()
      }
      else if(vals[3] !== '' && letop === 'd')
      {
        intop = vals[3]
      }
      else if(vals[3] !== '' && letop === 'D')
      {
        intop = vals[3].toUpperCase()
      }
      else if(vals[4] !== '' && letop === 'e')
      {
        intop = vals[4]
      }
      else if(vals[4] !== '' && letop === 'E')
      {
        intop = vals[4].toUpperCase()
      }
      else if(vals[5] !== '' && letop === 'f')
      {
        intop = vals[5]
      }
      else if(vals[5] !== '' && letop === 'F')
      {
        intop = vals[5].toUpperCase()
      }
      else if(vals[6] !== '' && letop === 'g')
      {
        intop = vals[6]
      }
      else if(vals[6] !== '' && letop === 'G')
      {
        intop = vals[6].toUpperCase()
      }
      else if(vals[7] !== '' && letop === 'h')
      {
        intop = vals[7]
      }
      else if(vals[7] !== '' && letop === 'H')
      {
        intop = vals[7].toUpperCase()
      }
      else if(vals[8] !== '' && letop === 'i')
      {
        intop = vals[8]
      }
      else if(vals[8] !== '' && letop === 'I')
      {
        intop = vals[8].toUpperCase()
      }
      else if(vals[9] !== '' && letop === 'j')
      {
        intop = vals[9]
      }
      else if(vals[9] !== '' && letop === 'J')
      {
        intop = vals[9].toUpperCase()
      }
      else if(vals[10] !== '' && letop === 'k')
      {
        intop = vals[10]
      }
      else if(vals[10] !== '' && letop === 'K')
      {
        intop = vals[10].toUpperCase()
      }
      else if(vals[11] !== '' && letop === 'l')
      {
        intop = vals[11]
      }
      else if(vals[11] !== '' && letop === 'L')
      {
        intop = vals[11].toUpperCase()
      }
      else if(vals[12] !== '' && letop === 'm')
      {
        intop = vals[12]
      }
      else if(vals[12] !== '' && letop === 'M')
      {
        intop = vals[12].toUpperCase()
      }
      else if(vals[13] !== '' && letop === 'n')
      {
        intop = vals[13]
      }
      else if(vals[13] !== '' && letop === 'N')
      {
        intop = vals[13].toUpperCase()
      }
      else if(vals[14] !== '' && letop === 'o')
      {
        intop = vals[14]
      }
      else if(vals[14] !== '' && letop === 'O')
      {
        intop = vals[14].toUpperCase()
      }
      else if(vals[15] !== '' && letop === 'p')
      {
        intop = vals[15]
      }
      else if(vals[15] !== '' && letop === 'P')
      {
        intop = vals[15].toUpperCase()
      }
      else if(vals[16] !== '' && letop === 'q')
      {
        intop = vals[16]
      }
      else if(vals[16] !== '' && letop === 'Q')
      {
        intop = vals[16].toUpperCase()
      }
      else if(vals[17] !== '' && letop === 'r')
      {
        intop = vals[17]
      }
      else if(vals[17] !== '' && letop === 'R')
      {
        intop = vals[17].toUpperCase()
      }
      else if(vals[18] !== '' && letop === 's')
      {
        intop = vals[18]
      }
      else if(vals[18] !== '' && letop === 'S')
      {
        intop = vals[18].toUpperCase()
      }
      else if(vals[19] !== '' && letop === 't')
      {
        intop = vals[19]
      }
      else if(vals[19] !== '' && letop === 'T')
      {
        intop = vals[19].toUpperCase()
      }
      else if(vals[20] !== '' && letop === 'u')
      {
        intop = vals[20]
      }
      else if(vals[20] !== '' && letop === 'U')
      {
        intop = vals[20].toUpperCase()
      }
      else if(vals[21] !== '' && letop === 'v')
      {
        intop = vals[21]
      }
      else if(vals[21] !== '' && letop === 'V')
      {
        intop = vals[21].toUpperCase()
      }
      else if(vals[22] !== '' && letop === 'w')
      {
        intop = vals[22]
      }
      else if(vals[22] !== '' && letop === 'W')
      {
        intop = vals[22].toUpperCase()
      }
      else if(vals[23] !== '' && letop === 'x')
      {
        intop = vals[23]
      }
      else if(vals[23] !== '' && letop === 'X')
      {
        intop = vals[23].toUpperCase()
      }
      else if(vals[24] !== '' && letop === 'y')
      {
        intop = vals[24]
      }
      else if(vals[24] !== '' && letop === 'Y')
      {
        intop = vals[24].toUpperCase()
      }
      else if(vals[25] !== '' && letop === 'z')
      {
        intop = vals[25]
      }
      else if(vals[25] !== '' && letop === 'Z')
      {
        intop = vals[25].toUpperCase()
      }
      else
      {
        intop = letop
      }
      tempop = tempop+intop
    }
    return(tempop)
  }
  m1 = decode(m1)
  return (
    <div className="App">
      <h1>TO DISTI SHAH</h1>
      <div className='under'>
        From Friends and Loved Ones
      </div>
      <h3>Description</h3>
      <div className='desc'>
        The following sections are messages from your friends and loved ones. Although these messages 
        are encrypted you do have the key to decrypt and read them. Each alphabet in the encrypted message
        corresponds to another alphabet in the actual message. It is upto you to map these coreesponding alphabets.
        Whichever alphabets you place under the bellow mentioned alphabets will replace the alphabets in all the 
        messages with the ones you have placed. To read the messages you will have to map the alphabets correctly.
        Finally it is for you to guess whcih message is from whom.
      </div>
      <h3>Cipher</h3>
      <div className='Div'>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <p>A</p><TextField label="Value" size='small' value={a} onChange={handlea}/>
          </Grid>
          <Grid item xs={2}>
            <p>B</p><TextField label="Value" size='small' value={b} onChange={handleb}/>
          </Grid>
          <Grid item xs={2}>
            <p>C</p><TextField label="Value" size='small' value={c} onChange={handlec}/>
          </Grid>
          <Grid item xs={2}>
            <p>D</p><TextField label="Value" size='small' value={d} onChange={handled}/>
          </Grid>
          <Grid item xs={2}>
            <p>E</p><TextField label="Value" size='small' value={e} onChange={handlee}/>
          </Grid>
          <Grid item xs={2}>
            <p>F</p><TextField label="Value" size='small' value={f} onChange={handlef}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <p>G</p><TextField label="Value" size='small' value={g} onChange={handleg}/>
          </Grid>
          <Grid item xs={2}>
            <p>H</p><TextField label="Value" size='small' value={h} onChange={handleh}/>
          </Grid>
          <Grid item xs={2}>
            <p>I</p><TextField label="Value" size='small' value={i} onChange={handlei}/>
          </Grid>
          <Grid item xs={2}>
            <p>J</p><TextField label="Value" size='small' value={j} onChange={handlej}/>
          </Grid>
          <Grid item xs={2}>
            <p>K</p><TextField label="Value" size='small' value={k} onChange={handlek}/>
          </Grid>
          <Grid item xs={2}>
            <p>L</p><TextField label="Value" size='small' value={l} onChange={handlel}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <p>M</p><TextField label="Value" size='small' value={m} onChange={handlem}/>
          </Grid>
          <Grid item xs={2}>
            <p>N</p><TextField label="Value" size='small' value={n} onChange={handlen}/>
          </Grid>
          <Grid item xs={2}>
            <p>O</p><TextField label="Value" size='small' value={o} onChange={handleo}/>
          </Grid>
          <Grid item xs={2}>
            <p>P</p><TextField label="Value" size='small' value={p} onChange={handlep}/>
          </Grid>
          <Grid item xs={2}>
            <p>Q</p><TextField label="Value" size='small' value={q} onChange={handleq}/>
          </Grid>
          <Grid item xs={2}>
            <p>R</p><TextField label="Value" size='small' value={r} onChange={handler}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <p>S</p><TextField label="Value" size='small' value={s} onChange={handles}/>
          </Grid>
          <Grid item xs={2}>
            <p>T</p><TextField label="Value" size='small' value={t} onChange={handlet}/>
          </Grid>
          <Grid item xs={2}>
            <p>U</p><TextField label="Value" size='small' value={u} onChange={handleu}/>
          </Grid>
          <Grid item xs={2}>
            <p>V</p><TextField label="Value" size='small' value={v} onChange={handlev}/>
          </Grid>
          <Grid item xs={2}>
            <p>W</p><TextField label="Value" size='small' value={w} onChange={handlew}/>
          </Grid>
          <Grid item xs={2}>
            <p>X</p><TextField label="Value" size='small' value={x} onChange={handlex}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <p>Y</p><TextField label="Value" size='small' value={y} onChange={handley}/>
          </Grid>
          <Grid item xs={2}>
            <p>Z</p><TextField label="Value" size='small' value={z} onChange={handlez}/>
          </Grid>
        </Grid>
      </div>
      <h3>Messages</h3>
      <div className='sect'>
        <Accordion sx={{
              backgroundColor: '#a27b5c00', marginBottom: '20px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} sx={{
              backgroundColor: '#2C3639',
              color: 'antiquewhite',
              height: '20px',
              borderRadius: '5px'}}>
            <Typography>Message 1</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{
              backgroundColor: '#3F4E4F',
              color: 'black',
              borderRadius: '5px'}}>
            <Typography>
              {m1}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
              backgroundColor: '#a27b5c00', marginBottom: '20px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} sx={{
              backgroundColor: '#2C3639',
              color: 'antiquewhite',
              height: '20px',
              borderRadius: '5px'}}>
            <Typography>Message 2</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{
              backgroundColor: '#3F4E4F',
              color: 'black',
              borderRadius: '5px'}}>
            <Typography>
              {m2}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
              backgroundColor: '#a27b5c00', marginBottom: '20px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} sx={{
              backgroundColor: '#2C3639',
              color: 'antiquewhite',
              height: '20px',
              borderRadius: '5px'}}>
            <Typography>Message 3</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{
              backgroundColor: '#3F4E4F',
              color: 'black',
              borderRadius: '5px'}}>
            <Typography>
              {m3}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
              backgroundColor: '#a27b5c00', marginBottom: '20px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} sx={{
              backgroundColor: '#2C3639',
              color: 'antiquewhite',
              height: '20px',
              borderRadius: '5px'}}>
            <Typography>Message 4</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{
              backgroundColor: '#3F4E4F',
              color: 'black',
              borderRadius: '5px'}}>
            <Typography>
              {m4}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
              backgroundColor: '#a27b5c00', marginBottom: '20px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} sx={{
              backgroundColor: '#2C3639',
              color: 'antiquewhite',
              height: '20px',
              borderRadius: '5px'}}>
            <Typography>Message 5</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{
              backgroundColor: '#3F4E4F',
              color: 'black',
              borderRadius: '5px'}}>
            <Typography>
              {m5}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{
              backgroundColor: '#a27b5c00', marginBottom: '20px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} sx={{
              backgroundColor: '#2C3639',
              color: 'antiquewhite',
              height: '20px',
              borderRadius: '5px'}}>
            <Typography>Message 6</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{
              backgroundColor: '#3F4E4F',
              color: 'black',
              borderRadius: '5px'}}>
            <Typography>
              {m6}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
