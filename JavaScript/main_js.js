const loadFont = (url) => {
    // the 'fetch' equivalent has caching issues
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let css = xhr.responseText;
            css = css.replace(/}/g, 'font-display: swap; }');

            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            head.appendChild(style);
        }
    };
    xhr.send();
}

loadFont('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap');





const test = document.querySelector('h1')
const Button1 = document.querySelector('.button1')
const Button2 = document.querySelector('.button2')
let Question = document.querySelector('p');
const All_Ques = ['هل النسبة المئوية لدرجة اللغة الإنجليزية أكثر من 80%؟ يمكنك معرفتها من خلال كتابة الدرجة التي حصلت عليها على الالة الحاسبة ثم قسمتها على درجة المادة الكلية ثم ضربها في 100',
    'هل لا يوجد عائق من ان تدرس باللغة الانجليزية؟ يرجى العلم ان المحتوى العلمي والامتحان وأسلوب الشرح يكون كاملتا باللغة الإنجليزية ',
    'هل تريد الدراسة في قسم خاص بمصروفات؟ المصروفات الدراسية تكون خاصه بشعبه اللغة الانجليزية وشعبة المحاسبة والتمويل وشعبة نظم معلومات الاعمال',
    'هل تود دراسة مجال محاسبة التمويل بشكل تفصيلي في الاربع سنوات ليصبح هذا تخصصك؟ "برنامج المحاسبة والتمويل هو برنامج متخصص ومتميز يشمل تخصصي المحاسبة والتمويل، وهو ما يوائم احتياجات سوق العمل، ويواكب الاتجاهات الحديثة في العلوم المحاسبية والتمويلية من ناحية، كما يلتزم بكافة متطلبات الجودة والاعتماد الأكاديمي من ناحية أخري”',
    'هل تستطيع اسرتك توفير 22000 جنيه سنويا وتنوى الالتحاق بقسم نظم معلومات الأعمال؟ نرجو منك طرح هذا السؤال على اسرتك اولا وللعلم الغرض من طرح هذا السؤال هو توفير مال للمصاريف السنوية للكلية فقط لا غير (تشمل مصاريف الالتحاق والكتب)',
    'هل تستطيع اسرتك توفير 11000 جنيه سنويا وتنوى الالتحاق بشعبة اللغة الإنجليزية؟ إذا كانت الاجابة على السؤال السابق بنعم اجب على هذا السؤال بنعم وإذا كانت الإجابة على السؤال السابق ب لا نرجو منك طرح هذا السؤال على اسرتك اولا وللعلم الغرض من طرح هذا السؤال هو توفير مال للمصاريف السنوية للكلية فقط لا غير (تشمل مصاريف الالتحاق والكتب)',
    'هل تستطيع اسرتك توفير 7400 جنية سنويا وتنوى الالتحاق بشعبة المحاسبة والتمويل؟ إذا كانت الاجابة على السؤال السابق بنعم اجب على هذا السؤال بنعم وإذا كانت الإجابة على السؤال السابق ب لا نرجو منك طرح هذا السؤال على اسرتك اولا وللعلم الغرض من طرح هذا السؤال هو توفير مال للمصاريف السنوية للكلية فقط لا غير (تشمل مصاريف الالتحاق والكتب)',
    'هل تجيد التعامل مع الاكواد وشغوف بالتكنولوجيا؟ محاولتك تعنى الكثير لنا مع اتجاه الدولة في تحويل جميع المنصات الحكومية للاتجاه الرقمي مثل تصميم هذا الموقع فهل حقا حاولت تعلم شيء في هذا العالم من قبل؟',
    'هل تريد ان تعمل على مشروع للتخرج للحصول على درجة البكالوريوس؟ خدمة اعرف كليتك هي بالأساس مشروع تخرج بالإضافة الى اجتياز المواد الأساسية خلال الاربع سنوات فهل حقا تود الدخول في قسم شرط أساسي للتخرج منه هو عمل مشروح لحل مشكله ما؟',
    'هل تريد دخول كلية الشرطة او الكلية الحربية من بعد مرحلة البكالوريوس؟ بعض الطلاب يودون الالتحاق بكليات الشرطة والحربية، ولكن في زي متخصص في قطاع ما مثل المحاسبي اعنى الالتحاق دون الدخول في اشتباكات (في تخصصك) فهل ترغب حقا في الالتحاق بعد مرحلة البكالوريوس؟',
    'هل تريد الالتحاق بالدراسات العليا بجامعة طنطا بعد التخرج؟ كلية التجارة جامعة طنطا تتقدم يوما عن يوم مما خلق العديد من الاقسام المطلوبة في سوق العمل مما ادى الى وجود اقسام لم يتم تجهيزها بعد لمرحلة الدراسات العليا فهل حقا تود الالتحاق بقسم يوجد به دراسات عليا في نفس التخصص؟',
    'هل ترغب في دراسة مواد برمجية؟ يوتيوب فيسبوك واتساب وغيرها كتير من التطبيقات هي تطبيقات برمجة فهل تود الدخول في هذا العالم حقا؟',
    'Look! The bus “ is leaving “ (Is this statement correct??)',
    'هل تريد الدراسة بنظام الساعات المعتمدة؟ هو نظام يتميز بعدم وجود رسوب في سنوي، بل بمعنى اخر لا يعيد الطالب العام الدراسي مرة أخرى بدل يجب عليه التسجيل في مادة الرسوب فقط وهذا النظام بمصروفات مع امكانيه تسجيل مواد الرسوب في الفصل الصيفي',
    'هل اخذت دورات من قبل لتحسين اللغة الإنجليزية؟ الإنجليزي دوقتي بقي متطلب أساسي في جميع فرص العمل فاكتسابك اللغة سيفرق معاك اكتر مما انت متوقع فهل حقا حاولت القيام بتحسن لغتك الانجليزية عن طريق التسجيل في دورات؟',
    'The factored from of 6x2+5xy- 4y2                  “(x+y) (3x-5y)” (This is answer is correct?)',
    'Factor the following 6x-12 “3(3x-9)” (This is answer is correct?)',
    'what is the area of the equilateral triangle if the height is 8 cm, and the side length is 8 cm? “24 cm2” (This is answer is correct?)',
    'Find the range for the following values (5-4-2-8-7-10-6) “8” (This is answer is correct?)',
    'هل يحول الحاسوب لغة البرمجة المكتوبة الى ارقام مكونة من 1 و2؟ ربما يستخدمها وربما يحولها للغة أخرى يفهمها ويقدر على التعامل معها فهل حقا يحول الحاسوب لغة البرمجة التي نكتبها الى (1-2)؟'
]
let first_Click = 0
let Next_Q = 0
let Arabic = 0
let English = 0
let FMI = 0
let BIS = 0
let no_80 = 0
let no_eng = 0
let no_cred = 0
let no_2000 = 0
let no_1200 = 0
let no_600 = 0
let yes_eng = 0
const NumberQ = All_Ques.length;



Button1.addEventListener('click', function() {
    first_Click++



    if (Next_Q < NumberQ && first_Click > 1) {


        if (Next_Q == 0) {
            BIS++
            English++

        } else if (Next_Q == 12) {
            BIS++
            English++


        } else if (Next_Q == 1) {
            English++
            BIS++
            yes_eng++

        } else if (Next_Q == 2) {
            BIS++
            English++
            FMI++
        } else if (Next_Q == 3) {
            FMI++
        } else if (Next_Q == 8 || Next_Q == 11 || Next_Q == 7 || Next_Q == 4) {
            BIS++
        } else if (Next_Q == 9) {
            Arabic++
        } else if (Next_Q == 10) {
            Arabic++
            English++
        } else if (Next_Q == 13) {
            BIS++
            FMI++
        } else if (Next_Q == 14 || Next_Q == 15 || Next_Q == 16 || Next_Q == 17 ||
            Next_Q == 18) {
            English++
            BIS++
        } else if (Next_Q == 19) {
            Arabic++
            FMI++
            English++
        } else if (Next_Q == 5) {
            English++
        } else if (Next_Q == 6) {
            FMI++
        }


        if (Next_Q == NumberQ - 1 || Next_Q > NumberQ) {
            Next_Q = 5000

            if (no_80 > 0 || no_eng > 0 || no_1200 > 0) {
                BIS = 0
                English = 0

            }
            if (no_cred > 0 || no_600 > 0) {
                BIS = 0
                English = 0
                FMI = 0
            }
            if (no_2000 > 0) {
                BIS = 0

            }
            let best_Section
            if (BIS >= FMI && BIS >= English && BIS >= Arabic) {
                best_Section = "والقسم الانسب اليك هو شعبة نظم معلومات الاعمال"
            } else if (FMI >= Arabic) {
                best_Section = "والقسم الانسب اليك هو شعبة المحاسبة والتمويل"
            } else if (English >= Arabic && English >= FMI) {
                best_Section = "والقسم الانسب اليك هو شعبة اللغة الانجليزية "
            } else {
                best_Section = "والقسم الانسب اليك هو شعبة اللغة العربية "
            }
            Question.textContent = ` شعبة نظم معلومات الاعمال حصلت على نقاط بعدد ${BIS} ------
          شعبة المحاسبة والتمويل حصلت على نقاط بعدد ${FMI} ------
          شعبة اللغة الانجليزيه حصلت على نقاط بعدد ${English} ------ 
          شعبة اللغة العربيه حصلت على نقاط بعدد ${Arabic} ------
          ${best_Section}`
            if (best_Section == "والقسم الانسب اليك هو شعبة اللغة العربية " || best_Section == "والقسم الانسب اليك هو شعبة اللغة الانجليزية ") {
                //add your url here
                let url = '../../A3RAF-KOLYTAK/Arabic + English Section.html'
                Button1.addEventListener('click', function() {
                    window.open(url, '_blank')
                })
            } else if (best_Section == "والقسم الانسب اليك هو شعبة المحاسبة والتمويل") {
                //add your url here
                let url = '../../A3RAF-KOLYTAK/A+F.html'
                Button1.addEventListener('click', function() {
                    window.open(url, '_blank')
                })
            } else {
                //add your url here
                let url = '../../A3RAF-KOLYTAK/Bis-Section.html'
                Button1.addEventListener('click', function() {
                    window.open(url, '_blank')
                })
            }
            Button2.addEventListener('click', function() {
                window.open('../../A3RAF-KOLYTAK/AllSections.html', '_blank')
            })
            Button1.textContent = "أعرض القسم المناسب"
            Button2.textContent = "أعرض كل الاقسام"


        } else {
            Next_Q++
            Question.textContent = All_Ques[Next_Q]
        }

        let best_Section

    } else if (first_Click == 1) {
        Question.textContent = All_Ques[Next_Q]
        Button1.textContent = "نعم"
        Button2.textContent = "لا"
    }

});
Button2.addEventListener('click', function() {
    first_Click++


    if (Next_Q < NumberQ && first_Click > 1) {



        if (Next_Q == 0) {
            no_80++
            FMI++
            Arabic++
        } else if (Next_Q == 1) {
            no_eng++
            FMI++
            Arabic++
        } else if (Next_Q == 2) {
            no_cred++
            Arabic++
        } else if (Next_Q == 4) {
            no_2000++
            English++
            FMI++
            Arabic++
        } else if (Next_Q == 5) {
            no_1200++
            FMI++
            Arabic++
            BIS++
        } else if (Next_Q == 6) {
            no_600++
            Arabic++
            BIS++
            English++
        } else if (Next_Q == 3) {
            BIS++
            Arabic++
            English++
        } else if (Next_Q == 7 || Next_Q == 8 || Next_Q == 11) {
            English++
            FMI++
            Arabic++
        } else if (Next_Q == 9) {
            BIS++
            English++
            FMI++
        } else if (Next_Q == 10) {
            Arabic++
            English++

        } else if (Next_Q == 12 || Next_Q == 14 || Next_Q == 15 || Next_Q == 16 || Next_Q == 17 ||
            Next_Q == 18) {
            Arabic++
            FMI++
        } else if (Next_Q == 13) {
            Arabic++
            English++
        } else if (Next_Q == 19) {
            BIS++
        }





        if (Next_Q == NumberQ - 1 || Next_Q > NumberQ) {
            Next_Q = 5000
            if (no_80 > 0 || no_eng > 0 || no_1200 > 0) {
                BIS = 0
                English = 0

            }
            if (no_cred > 0 || no_600 > 0) {
                BIS = 0
                English = 0
                FMI = 0

            }
            if (no_2000 > 0) {
                BIS = 0

            }
            let best_Section
            if (BIS >= FMI && BIS >= English && BIS >= Arabic) {
                best_Section = "والقسم الانسب اليك هو شعبة نظم معلومات الاعمال"
            } else if (FMI >= Arabic) {
                best_Section = "والقسم الانسب اليك هو شعبة المحاسبة والتمويل"
            } else if (English >= Arabic && English >= FMI) {
                best_Section = "والقسم الانسب اليك هو شعبة اللغة الانجليزية "
            } else {
                best_Section = "والقسم الانسب اليك هو شعبة اللغة العربية "
            }
            Question.textContent = ` شعبة نظم معلومات الاعمال حصلت على نقاط بعدد ${BIS} ------
          شعبة المحاسبة والتمويل حصلت على نقاط بعدد ${FMI} ------
          شعبة اللغة الانجليزيه حصلت على نقاط بعدد ${English} ------ 
          شعبة اللغة العربيه حصلت على نقاط بعدد ${Arabic} ------
          ${best_Section}`
            if (best_Section == "والقسم الانسب اليك هو شعبة اللغة العربية " || best_Section == "والقسم الانسب اليك هو شعبة اللغة الانجليزية ") {
                //add your url here
                let url = '../../A3RAF-KOLYTAK/Arabic + English Section.html'
                Button1.addEventListener('click', function() {
                    window.open(url, '_blank')
                })
            } else if (best_Section == "والقسم الانسب اليك هو شعبة المحاسبة والتمويل") {
                //add your url here
                let url = '../../A3RAF-KOLYTAK/A+F.html'
                Button1.addEventListener('click', function() {
                    window.open(url, '_blank')
                })
            } else {
                //add your url here
                let url = '../../A3RAF-KOLYTAK/Bis-Section.html'
                Button1.addEventListener('click', function() {
                    window.open(url, '_blank')
                })
            }
            Button2.addEventListener('click', function() {
                window.open('../../A3RAF-KOLYTAK/AllSections.html', '_blank')
            })
            Button1.textContent = "أعرض القسم المناسب"
            Button2.textContent = "أعرض كل الاقسام"

        } else {
            Next_Q++
            Question.textContent = All_Ques[Next_Q]
        }

    } else if (first_Click == 1) {
        Question.textContent = All_Ques[Next_Q]
        Button1.textContent = "نعم"
        Button2.textContent = "لا"
    }


})