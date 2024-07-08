import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })
const [btntext, setBtnText]=useState("Enable Dark Mode")
    const toggleStyle = () =>{
        if(myStyle.color ==='black'){
            setMyStyle(
                {
                    color:'white',
                    backgroundColor: 'black'
                }
            )
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white'
                }
            )
            setBtnText("Enable Dark Mode");
        }
    }
  return (
    <> 
    <div className="container" style={myStyle}>
        <h2> About Us</h2>
      <p> <b>Welcome to the Convert Case Text Generator Tool </b><br></br>
A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:
<br></br>
<b>Sentence Case</b> <br></br>
The sentence case converter will allow you to paste any text you’d like, and it will automatically transform it to a fully formed structured sentence.

It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.

Note: it won’t, however, capitalize names or places.

This is an example of sentence case.
<br></br>
<b>Lower Case</b><br></br>
If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.

this is an example of lower case.
<br></br>
<b>Upper Case</b><br></br>
The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.

THIS IS AN EXAMPLE OF UPPER CASE.
<br></br>
<b>Capitalized Case</b><br></br>
The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.

Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.

This Is An Example Of Capitalized Case.
<br></br>
<b>Alternating Case</b><br></br>
The alternating case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word.

tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE.
<br></br>
<b>Title Case</b><br></br>
The title case converter is perfect for those who are a bit unsure on how to title an upcoming essay. It essentially ensures the correct letters are capitalized within the context of a title. Words such as “an” will be left all in lower case and words that are important will be converted such as “Title”.

This Is an Example of Title Case.
<br></br>
<b>Small Text Generator</b><br></br>
The small text generator simply takes regular sized text and converts it into small text (specifically “small caps” as well as “Superscript” text. Write out your normal text and see it get converted into the small text font.

Tʜɪꜱ ɪꜱ ᴀɴ ᴇxᴀᴍᴘʟᴇ ᴏꜰ ᴛɪɴʏ ᴛᴇxᴛ ᴄᴀꜱᴇ ꜱᴍᴀʟʟ ᴄᴀᴘꜱ
ᵗʰⁱˢ ⁱˢ ᵃⁿ ᵉˣᵃᵐᵖˡᵉ ᵒᶠ ᵗⁱⁿʸ ᵗᵉˣᵗ ᶜᵃˢᵉ ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ
<br></br>
<b>Wide Text Generator</b><br></br>
If you are looking to widen the look of your text, the widening text generator is great for this, otherwise known as the Aesthetic Font and text generator. Simply type your normal text and see it get wider and wider.

Ｔｈｉｓ ｉｓ ａｎ ｅｘａｍｐｌｅ ｏｆ ｗｉｄｅ ａｅｓｔｈｅｔｉｃ ｔｅｘｔ。
<br></br>
<b>Reverse Text Generator</b><br></br>
If you want a fast and quick way of making your text go back to front, the reverse text generator is great. Write out your text like normal and then see it get flipped.

.txet sdrawkcab fo ecnetnes elpmaxe na si sihT
<br></br>
<b>Bold Text Generator</b><br></br>
A quick way to bold your text online. Simply type out the normal text into the tool and see it automatically get converted to the bold versio which you can copy and paste across.

𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮𝗻 𝗲𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝗯𝗼𝗹𝗱 𝘁𝗲𝘅𝘁.
<br></br>
<b>Italic Text Converter</b><br></br>
If you want to italicise your font, this is a great tool. Type out your normal text and see it automatically write on a slant, which you can copy and paste where you want.

𝘛𝘩𝘪𝘴 𝘪𝘴 𝘢𝘯 𝘦𝘹𝘢𝘮𝘱𝘭𝘦 𝘰𝘧 𝘪𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵.
<br></br>
<b>Underline Text Generator</b><br></br>
Underline your text online with this underliner tool. Write out or paste across the content you want to be underlined and then you will see it automatically generated underlined - which you can copy and paste across to where you want.

T̲h̲i̲s̲ ̲i̲s̲ ̲a̲n̲ ̲e̲x̲a̲m̲p̲l̲e̲ ̲o̲f̲ ̲u̲n̲d̲e̲r̲l̲i̲n̲e̲ ̲t̲e̲x̲t̲.̲</p>  <br></br>
<button  onClick= {toggleStyle} type="button" className="btn btn-primary" >{btntext} </button>
    </div>
   
    </>
  )
  
}
