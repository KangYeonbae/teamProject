function getBotResponse(input){
    if (input === "서울"){
        console.log("서울메뉴")
        return "서울홈, 경복궁, 광장시장, 남산, 롯데월드, DDP 메뉴가있습니다."
    } else if (input === "강릉"){
        console.log("강릉메뉴")
        return "강릉홈, 맛집 메뉴가 있습니다."
    } else if (input ==="군산"){
        console.log("군산메뉴")
        return "군산홈, 고군산군도, 시간태마여행, 개정/임피 메뉴가 있습니다."
    } else if(input === "부산"){
        console.log("부산메뉴")
        return "부산홈, 해운대, 감천마을, 광안리가 있습니다."
    } else {
        console.log("지정메뉴외")
        return "준비중입니다. 다른 메뉴를 선택해 주세요^^"
    }
}