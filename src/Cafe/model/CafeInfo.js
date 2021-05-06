class CafeInfo{

    //카페 멤버 변수 생성과 동시에 생성자 만듬
    constructor(name,address,reviewScore,desertLike,coffeeLike,viewLike,interLike){
        this._name = name;
        this._address = address;
        this._reviewScore = reviewScore;
        this._desertLike = desertLike;
        this._coffeeLike = coffeeLike;
        this._viewLike = viewLike;
        this._interLike = interLike;
    }


    //멤버변수에 대한 getter setter 만듬
    get name(){
        return this._name
    }

    set name(value){
        if(!value){
            console.log('카페 이름을 입력하세요.')
            return;
        }else{
            this._name = value;
        }
    }

    get address(){
        return this._address
    }

    set address(value){
        if(!value){
            console.log('카페 이름을 입력하세요.')
            return;
        }else{
            this._address = value;
        }
    }

    get reviewScore(){
        return this._reviewScore
    }

    set reviewScore(value){
        if(!value){
            console.log('리뷰 점수를 입력하세요.')
            return;
        }else{
            this._reviewScore = value;
        }
    }

    get desertLike(){
        return this._desertLike
    }

    set desertLike(value){
        if(!value){
            console.log('디저트 좋아요 수를 입력하세요.')
            return;
        }else{
            this._desertLike = value;
        }
    }

    get coffeeLike(){
        return this._coffeeLike
    }

    set coffeeLike(value){
        if(!value){
            console.log('커피 좋아요 수를 입력하세요.')
            return;
        }else{
            this._coffeeLike = value;
        }
    }

    get viewLike(){
        return this._viewLike
    }

    set viewLike(value){
        if(!value){
            console.log('경치 좋아요 수를 입력하세요.')
            return;
        }else{
            this._viewLike = value;
        }
    }

    get interLike(){
        return this._interLike
    }

    set interLike(value){
        if(!value){
            console.log('경치 좋아요 수를 입력하세요.')
            return;
        }else{
            this._interLike = value;
        }
    }
}

export default CafeInfo;