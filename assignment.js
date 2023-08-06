function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    
    function htmlContentPosition(num){
        let ans = [];
        let plainTextCount = 0;
        let htmlContentCount= 0;
        let isCountingStop = false;
        let isAddSpace = true;
        for(let j=0; j<htmlContent.length; j++){
            
            if(htmlContent[j]=='<'){
                isCountingStop = true;
                if(j==0 || htmlContent[j-1]==' ')
                    isAddSpace = false;
            }
            if(htmlContent[j]=='>' &&htmlContent[j+1]!='<'){
                isCountingStop = false;
                if(isAddSpace || htmlContent[j+1]==' '){
                    plainTextCount++;
                    ans.push(' ');
                }
                else{
                    isAddSpace = true;
                }
            }
            else{
                if(!isCountingStop) {
                    plainTextCount++;
                    ans.push(htmlContent[j])
                }
            }
            htmlContentCount++;
            if(num == plainTextCount)
                return htmlContentCount
        }
        console.log(ans.join(''))
        //console.log(plainText)
        return [htmlContent.length,htmlContentCount,plainText.length,plainTextCount]
    }

    const updatesPositions = plainTextPositions.map((position) => ({
        start: htmlContentPosition(position.start),
        end: htmlContentPosition(position.end),
    }));
    
       
    let modifiedHtml = htmlContent;
    updatesPositions.forEach((pos) => {
    const startIndex = pos.start;
    const endIndex = pos.end
  
    if (startIndex !== -1) {
        modifiedHtml =
            modifiedHtml.substring(0, startIndex) +
            '<mark>' +
            modifiedHtml.substring(startIndex, endIndex) +
            '</mark>' +
            modifiedHtml.substring(endIndex);
        }     
    });

    console.log(modifiedHtml);
}
  
  
  

const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';

const plainText = 'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------'

const plainTextPositions = [
    {
        start: 241,
        end: 247,
    },
    {
        start: 518,
        end: 525,
    },
]

const output ='<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility <mark>Equity</mark> scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | <mark>Privacy</mark> Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>'

console.log(
    highlightHTMLContent(htmlContent, plainText, plainTextPositions)
);

