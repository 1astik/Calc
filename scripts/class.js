"use strict";

class Calc {

    constructor() {
        this.option = 0;
        this.buffer = 0;
        this.replay = 0;
        this.replay_flag = false;


        this.init();

    }


    init(){
        this.$calc_out = document.querySelector( '.calc-out' );
        this.$b_clear = document.querySelector( '.b-clear' );
        this.$b_backspase = document.querySelector( '.b-backspace' );
        this.$b_dot = document.querySelector( '.b-dot' );
        this.$b_sqrt = document.querySelector( '.b-sqrt' );


        this.$b_0 = document.querySelector( '.b-0' );
        this.$b_1 = document.querySelector( '.b-1' );
        this.$b_2 = document.querySelector( '.b-2' );
        this.$b_3 = document.querySelector( '.b-3' );
        this.$b_4 = document.querySelector( '.b-4' );
        this.$b_5 = document.querySelector( '.b-5' );
        this.$b_6 = document.querySelector( '.b-6' );
        this.$b_7 = document.querySelector( '.b-7' );
        this.$b_8 = document.querySelector( '.b-8' );
        this.$b_9 = document.querySelector( '.b-9' );


        this.$b_add = document.querySelector( '.b-add' );
        this.$b_sub = document.querySelector( '.b-sub' );
        this.$b_mult = document.querySelector( '.b-multiply' );
        this.$b_div = document.querySelector( '.b-division' );
        this.$b_percent = document.querySelector( '.b-percent' );
        this.$b_eq = document.querySelector( '.b-eq' );

        this.events();
    }


    events() {
        this.$b_clear.addEventListener( 'click', this.clear_all.bind( this ) );
        this.$b_backspase.addEventListener( 'click', this.backspace.bind( this ) );
        this.$b_dot.addEventListener( 'click', this.dot.bind( this ) );
        this.$b_sqrt.addEventListener( 'click', this.sqrt.bind( this ) );

        this.$b_0.addEventListener( 'click', this.b_0.bind( this ) );
        this.$b_1.addEventListener( 'click', this.b_1.bind( this ) );
        this.$b_2.addEventListener( 'click', this.b_2.bind( this ) );
        this.$b_3.addEventListener( 'click', this.b_3.bind( this ) );
        this.$b_4.addEventListener( 'click', this.b_4.bind( this ) );
        this.$b_5.addEventListener( 'click', this.b_5.bind( this ) );
        this.$b_6.addEventListener( 'click', this.b_6.bind( this ) );
        this.$b_7.addEventListener( 'click', this.b_7.bind( this ) );
        this.$b_8.addEventListener( 'click', this.b_8.bind( this ) );
        this.$b_9.addEventListener( 'click', this.b_9.bind( this ) );

        this.$b_add.addEventListener( 'click', this.add.bind( this ) );
        this.$b_sub.addEventListener( 'click', this.sub.bind( this ) );
        this.$b_mult.addEventListener( 'click', this.mult.bind( this ) );
        this.$b_div.addEventListener( 'click', this.division.bind( this ) );
        this.$b_percent.addEventListener( 'click', this.percent.bind( this ) );
        this.$b_eq.addEventListener( 'click', this.eq.bind( this ) );
    }


    clear() {
        this.$calc_out.value = '';
    }
    clear_all() {
        this.$calc_out.value = '';
        this.buffer = 0;
    }

    backspace() {
        this.$calc_out.value = this.$calc_out.value.slice( 0, -1 );
    }

    dot() {
        this.$calc_out.value += '.';
    }
    sqrt() {
        this.$calc_out.value = Math.sqrt(+this.$calc_out.value);
    }


    b_0() {
        this.$calc_out.value += 0;
    }

    b_1() {
        this.$calc_out.value += 1;
    }

    b_2() {
        this.$calc_out.value += 2;
    }

    b_3() {
        this.$calc_out.value += 3;
    }

    b_4() {
        this.$calc_out.value += 4;
    }

    b_5() {
        this.$calc_out.value += 5;
    }

    b_6() {
        this.$calc_out.value += 6;
    }

    b_7() {
        this.$calc_out.value += 7;
    }

    b_8() {
        this.$calc_out.value += 8;
    }

    b_9() {
        this.$calc_out.value += 9;
    }


    buf() {
        this.replay_flag = true;
        if ( this.buffer === 0 ) {
            this.buffer = +this.$calc_out.value;
        }else {
            this.options(+this.$calc_out.value);
        }
        this.clear()
    }

    add() {
        this.buf();
        this.option = 1;
    }

    sub() {
        this.buf();
        this.option = 2;
    }

    mult() {
        this.buf();
        this.option = 3;
    }

    division() {
        this.buf();
        this.option = 4;
    }

    percent() {
        this.$calc_out.value = ( this.buffer * +this.$calc_out.value ) / 100;
        this.option = 0;
    }

    options( data ) {
        switch ( this.option ) {
            case 1:
                this.buffer += data;
                break;
            case 2:
                this.buffer -= data;
                break;
            case 3:
                this.buffer *= data;
                break;
            case 4:
                this.buffer /= data;
                break;
        }
    }

    eq() {
        if ( this.replay_flag ) {
            this.replay = +this.$calc_out.value;
        }
        this.options(this.replay);
        this.$calc_out.value = this.buffer;
        this.replay_flag = false;
    }

}

new Calc();


