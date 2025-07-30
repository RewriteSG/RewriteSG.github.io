const body = document.body;
var content_grid_name = "";
var notNavClick = true;
function SelectWeightlift()
{
    
    Card_Reset();
    let TopicGrid = document.getElementById("weightlift_content_grid");
    if(TopicGrid.classList.contains("display_none"))
    {
        TopicGrid.classList.remove("display_none");
    }
    if(notNavClick)
        TopicGrid.scrollIntoView({
            behavior: "smooth"
        });
    notNavClick = true;
    TopicGrid = document.getElementById("calisthenics_content_grid");
    if(!TopicGrid.classList.contains("display_none"))
        TopicGrid.classList.add("display_none");
    TopicGrid = document.getElementById("bulkcut_content_grid");
    if(!TopicGrid.classList.contains("display_none"))
        TopicGrid.classList.add("display_none");
    content_grid_name = "weightlift";
    card_selected = 1;
    SetContentGridElement();
    if(content_grid_element)
    {
        card_size = SetMaxCardsNumber();
        SetButtons();
        Card_ShowSelected(card_selected);
    }
    let topicBtns = document.querySelectorAll("#subtopic_selection button")
    topicBtns.forEach(btn => {
        if(btn.classList.contains("topic_selected_btn"))
            btn.classList.remove("topic_selected_btn");
    });
    topicBtn = document.getElementById(content_grid_name+"_btn");
    if(topicBtn)
    {
        topicBtn.classList.add("topic_selected_btn");
    }
}
function SelectCalisthenics()
{
    
    Card_Reset();
    let TopicGrid = document.getElementById("weightlift_content_grid");
    if(!TopicGrid.classList.contains("display_none"))
        TopicGrid.classList.add("display_none");
    TopicGrid = document.getElementById("calisthenics_content_grid");
    if(TopicGrid.classList.contains("display_none"))
    {
        TopicGrid.classList.remove("display_none");
    }
    if(notNavClick)
    TopicGrid.scrollIntoView({
        behavior: "smooth"
    });
    notNavClick = true;
    TopicGrid = document.getElementById("bulkcut_content_grid");
    if(!TopicGrid.classList.contains("display_none"))
        TopicGrid.classList.add("display_none");
    content_grid_name = "calisthenics";
    card_selected = 1;
    SetContentGridElement();
    if(content_grid_element)
    {
        card_size = SetMaxCardsNumber();
        SetButtons();
        Card_ShowSelected(card_selected);
    }
    let topicBtns = document.querySelectorAll("#subtopic_selection button")
    topicBtns.forEach(btn => {
        if(btn.classList.contains("topic_selected_btn"))
            btn.classList.remove("topic_selected_btn");
    });
    topicBtn = document.getElementById(content_grid_name+"_btn");
    if(topicBtn )
    {
        topicBtn.classList.add("topic_selected_btn");
    }
                
}
function Selectbulkcut()
{
    Card_Reset();
    let TopicGrid = document.getElementById("weightlift_content_grid");
    if(!TopicGrid.classList.contains("display_none"))
        TopicGrid.classList.add("display_none");
    TopicGrid = document.getElementById("calisthenics_content_grid");
    if(!TopicGrid.classList.contains("display_none"))
        TopicGrid.classList.add("display_none");
    TopicGrid = document.getElementById("bulkcut_content_grid");
    if(TopicGrid.classList.contains("display_none"))
    {
        TopicGrid.classList.remove("display_none");
    }
    if(notNavClick)
    TopicGrid.scrollIntoView({
                behavior: "smooth"
            });
    notNavClick = true;
    content_grid_name = "bulkcut";
    card_selected = 1;
    SetContentGridElement();
    if(content_grid_element)
    {
        card_size = SetMaxCardsNumber();
        SetButtons();
        Card_ShowSelected(card_selected);
    }
    let topicBtns = document.querySelectorAll("#subtopic_selection button")
    topicBtns.forEach(btn => {
        if(btn.classList.contains("topic_selected_btn"))
            btn.classList.remove("topic_selected_btn");
    });
    topicBtn = document.getElementById(content_grid_name+"_btn");
    if(topicBtn)
    {
        topicBtn.classList.add("topic_selected_btn");
    }
}
function Load_Subtopic_page()
{
            // content_grid_name = "None";
            // const params = new URLSearchParams(window.location.search);
            // const topic = params.get("topic");
            let disableTopic = document.getElementById("weightlift_content_grid");
            disableTopic.classList.add("display_none");
            disableTopic = document.getElementById("calisthenics_content_grid");
            disableTopic.classList.add("display_none");
            disableTopic = document.getElementById("bulkcut_content_grid");
            disableTopic.classList.add("display_none");
            // switch (topic) {
            //     case "weightlift":
            //         content_grid_name = "weightlift";
            //         break;
            //     case "calisthenics":
            //         content_grid_name = "calisthenics";
            //         break;
            //     case "bulkcut":
            //         content_grid_name = "bulkcut";
            //         break;
            //     default:
            //         break;
            // }

            let topicBtn = document.getElementById("weightlift_btn");
            topicBtn.addEventListener("click",SelectWeightlift);

            topicBtn = document.getElementById("calisthenics_btn");

            topicBtn.addEventListener("click", SelectCalisthenics);
            
            topicBtn = document.getElementById("bulkcut_btn");
            topicBtn.addEventListener("click",Selectbulkcut);
            
            let topicBtns = document.querySelectorAll("#subtopic_selection button")
            topicBtns.forEach(btn => {
                if(btn.classList.contains("topic_selected_btn"))
                    btn.classList.remove("topic_selected_btn");
            });

            // topicBtn = document.getElementById(content_grid_name+"_btn");
            // if(topicBtn)
            // {
            //     topicBtn.classList.add("topic_selected_btn");
            // }

            // disableTopic = document.getElementById(content_grid_name+"_content_grid");
            // if(disableTopic)
            //     disableTopic.classList.remove("display_none");


}
{ // Cards

    var content_grid_element;
    var card_selected = 1;
    var card_size = 0;
    function SetContentGridElement()
    {
        content_grid_element = document.getElementById(content_grid_name+"_content_grid");
    }
    function SetMaxCardsNumber()
    {
        return content_grid_element.querySelectorAll(".content_card").length;
    }
    function Card_Reset()
    {
        let cards = content_grid_element.querySelectorAll(".content_card")
        cards.forEach(card => 
        {
            card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
        });
    }
    function Card_ShowSelected(index)
    {
        let selected_content_card = document.getElementById(content_grid_name+"_content_card_" + index);

        if(selected_content_card)
        {
            selected_content_card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
        }
        let left_content_card;
        let right_content_card;
        console.log("Left" + (index-1));
        console.log("right" + (index+1));
        console.log("size" + (card_size))
        if(index > 1)
        {
            left_content_card = document.getElementById(content_grid_name + "_content_card_"+(index-1));
            left_content_card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
            left_content_card.classList.add("content_preview_left");
        }
        if(index < card_size)
        {
            right_content_card = document.getElementById(content_grid_name + "_content_card_"+(index+1));
            right_content_card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
            right_content_card.classList.add("content_preview_right");    
        }
        let cards = content_grid_element.querySelectorAll(".content_card")
        cards.forEach(card => 
        {
                if(card != selected_content_card && card != left_content_card && card != right_content_card)
                {
                    card.classList.add("content_card_preview_none");
                }
        });
    }

    var content_grid_left_btn;
    var content_grid_right_btn;

    function SetButtons()
    {
        content_grid_left_btn = content_grid_element.querySelector(".card_left_btn");
        content_grid_right_btn = content_grid_element.querySelector(".card_right_btn");
        if(!content_grid_left_btn.classList.contains("card_button_eventadded"))
            content_grid_left_btn.addEventListener("click", function()
        {
            card_selected = Math.max((card_selected-1), 1);
            Card_ShowSelected(card_selected);
        });
        
        if(!content_grid_right_btn.classList.contains("card_button_eventadded"))
            content_grid_right_btn.addEventListener("click", function()
        {
            card_selected = Math.min((card_selected+1),( card_size));
            Card_ShowSelected(card_selected);
        });
        content_grid_left_btn.classList.add("card_button_eventadded");
        content_grid_right_btn.classList.add("card_button_eventadded");
    }
    Load_Subtopic_page();
    content_grid_name = "whystayfit";
    SetContentGridElement();
    if(content_grid_element)
    {
        card_size = SetMaxCardsNumber();
        SetButtons();
        Card_ShowSelected(card_selected);
    }



}
    
{   // Extra Init
    const dMuscleGroup = document.getElementById("muscle_group");
    const dQuiz = document.getElementById("quiz");
    
    document.getElementById("quiz_fullscreen_btn").addEventListener("click",function()
    {
        dQuiz.classList.toggle("quiz_fullscreen");
        dQuiz.scrollIntoView({
            behavior: "smooth"
        })
        document.getElementById("sticky_navigation").classList.toggle("display_none");
        
    });
    function HideAllExtras()
    {
        if(!dMuscleGroup.classList.contains("display_none"))
            dMuscleGroup.classList.add("display_none");
        if(!dQuiz.classList.contains("display_none"))
            dQuiz.classList.add("display_none");
    }

    const quiz_selection_btn = document.getElementById("quiz_btn");
    const musclegroup_selection_btn = document.getElementById("musclegroup_btn");
    quiz_selection_btn.addEventListener("click", function()
    {
        if(quiz_selection_btn.classList.contains("selected_btn"))
            return;
        musclegroup_selection_btn.classList.remove("selected_btn");
        quiz_selection_btn.classList.add("selected_btn");
        HideAllExtras();
        RemoveAllMuscleSelection();
        dQuiz.classList.remove("display_none");
        dQuiz.scrollIntoView({
            behavior: "smooth"
        });
    });
    musclegroup_selection_btn.addEventListener("click", function()
    {
        if(musclegroup_selection_btn.classList.contains("selected_btn"))
            return;
        quiz_selection_btn.classList.remove("selected_btn");
        musclegroup_selection_btn.classList.add("selected_btn");
        HideAllExtras();
        RemoveAllMuscleSelection();
        dMuscleGroup.classList.remove("display_none");
        dMuscleGroup.scrollIntoView({
            behavior: "smooth"
        });
    });
    const sideFront = "front";
    const sideBack = "back";
    let fullbodySection = "muscle_group_full_body_section";

function GetMuscleElement(fullbodySection, side, muscle, prefix)
{
    const element = document.querySelector("#"+fullbodySection+" ."+side+'_'+muscle+'_'+prefix);
    const muscleName = side+'_'+muscle;
    return {element, muscleName};
}
function GetFrontTraps(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "traps",prefix);
}
function GetFrontForearms(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "forearms",prefix);
}
function GetFrontBiceps(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "biceps",prefix);
}
function GetFrontDelts(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "delts",prefix);
}
function GetFrontPecs(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "pecs",prefix);
}
function GetFrontObliques(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "obliques",prefix);
}
function GetFrontAbdominals(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "abdominals",prefix);
}
function GetFrontQuads(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "quads",prefix);
}
function GetFrontCalfs(prefix)
{
    return GetMuscleElement(fullbodySection, sideFront, "calfs",prefix);
}
function GetBackTraps(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "traps",prefix);
}
function GetBackForearms(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "forearms",prefix);
}
function GetBackTriceps(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "triceps",prefix);
}
function GetBackReardelts(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "delts",prefix);
}
function GetBackLowerback(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "lowerback",prefix);
}
function GetBackUpperback(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "upperback",prefix);
}
function GetBackLats(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "lats",prefix);
}
function GetBackGlutes(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "glutes",prefix);
}
function GetBackHamstring(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "hamstring",prefix);
}
function GetBackCalfs(prefix)
{
    return GetMuscleElement(fullbodySection, sideBack, "calfs",prefix);
}
function HideHighlight(highlight)
{
    // if (!highlight) return; // safety check
    // if(highlight.classList.contains("opacity_0"))
    //     return;
    // highlight.classList.add("opacity_0");
}
function HideAllHighlights()
{
    // let red;
    // red = GetFrontTraps("red");
    // HideHighlight(red);
    // red = GetFrontBiceps("red");
    // HideHighlight(red);
    // red = GetFrontDelts("red");
    // HideHighlight(red);
    // red = GetFrontAbdominals("red");
    // HideHighlight(red);
    // red = GetFrontCalfs("red");
    // HideHighlight(red);
    // red = GetFrontForearms("red");
    // HideHighlight(red);
    // red = GetFrontObliques("red");
    // HideHighlight(red);
    // red = GetFrontQuads("red");
    // HideHighlight(red);
    // red = GetFrontPecs("red");
    // HideHighlight(red);

    // red = GetBackTraps("red");
    // HideHighlight(red);
    // red = GetBackLats("red");
    // HideHighlight(red);
    // red = GetBackReardelts("red");
    // HideHighlight(red);
    // red = GetBackTriceps("red");
    // HideHighlight(red);
    // red = GetBackForearms("red");
    // HideHighlight(red);
    // red = GetBackLowerback("red");
    // HideHighlight(red);
    // red = GetBackUpperback("red");
    // HideHighlight(red);
    // red = GetBackGlutes("red");
    // HideHighlight(red);
    // red = GetBackHamstring("red");
    // HideHighlight(red);
    // red = GetBackCalfs("red");
    // HideHighlight(red);
}
function RemoveAllMuscleSelection()
{
    let muscles = document.querySelectorAll(".muscle_selected");
    muscles.forEach(muscle => {
            muscle.classList.remove("muscle_selected");
    });
}
function MuscleGroupBtn_Event(getMuscleFunction)
{
    let {element: muscle_red, muscleName: muscle} = getMuscleFunction("red");

    if(muscle_red.classList.contains("muscle_selected"))
    {
        RemoveAllMuscleSelection();
        muscleGroup_HideAllExercise();
        return;
    }
    RemoveAllMuscleSelection();
    muscle_red.classList.add("muscle_selected");
    muscleGroup_HideAllExercise();
    SearchExerciseByName(muscle);
    // HideAllHighlights();
}

function InitaliseMuscleGroupBtn(getMuscleFunction)
{
    fullbodySection = "muscle_group_full_body_section";
    const {element: muscle_group_Btn, muscleName: muscle } = getMuscleFunction("btn");
    muscle_group_Btn.classList.add("opacity_0");
    muscle_group_Btn.addEventListener("click", function()
    {
        fullbodySection = "muscle_group_full_body_section";
        MuscleGroupBtn_Event(getMuscleFunction);
    });
    muscle_group_Btn.addEventListener("mouseenter",function()
    {
        fullbodySection = "muscle_group_full_body_section";
        const  {element: muscle_group_red, muscleName: muscle } = getMuscleFunction("red");
        muscle_group_red.classList.remove("opacity_0");
        if(!muscle_group_red.classList.contains("hovering_muscle"))
            muscle_group_red.classList.add("hovering_muscle");
    });
    muscle_group_Btn.addEventListener("mouseleave",function()
    {
        fullbodySection = "muscle_group_full_body_section";
        const {element: muscle_group_red, muscle} = getMuscleFunction("red");
        if(!muscle_group_red.classList.contains("opacity_0"))
            muscle_group_red.classList.add("opacity_0");
        muscle_group_red.classList.remove("hovering_muscle");
    });
}   
    fullbodySection = "muscle_group_full_body_section";
    var currentSide = "back";
    HideAllHighlights();
    InitaliseMuscleGroupBtn(GetFrontTraps);
    InitaliseMuscleGroupBtn(GetFrontPecs);
    InitaliseMuscleGroupBtn(GetFrontDelts);
    InitaliseMuscleGroupBtn(GetFrontAbdominals);
    InitaliseMuscleGroupBtn(GetFrontObliques);
    InitaliseMuscleGroupBtn(GetFrontBiceps);
    InitaliseMuscleGroupBtn(GetFrontForearms);
    InitaliseMuscleGroupBtn(GetFrontQuads);
    InitaliseMuscleGroupBtn(GetFrontCalfs);
    
    InitaliseMuscleGroupBtn(GetBackTraps);
    InitaliseMuscleGroupBtn(GetBackReardelts);
    InitaliseMuscleGroupBtn(GetBackUpperback);
    InitaliseMuscleGroupBtn(GetBackLats);
    InitaliseMuscleGroupBtn(GetBackTriceps);
    InitaliseMuscleGroupBtn(GetBackForearms);
    InitaliseMuscleGroupBtn(GetBackLowerback);
    InitaliseMuscleGroupBtn(GetBackGlutes);
    InitaliseMuscleGroupBtn(GetBackHamstring);
    InitaliseMuscleGroupBtn(GetBackCalfs);
    
    var ExerciseElements = document.querySelectorAll("#muscle_group_content > div ");

    function muscleGroup_HideAllExercise()
    {
        ExerciseElements = document.querySelectorAll("#muscle_group_content > div ");
        ExerciseElements.forEach(element => {
            if(!element.classList.contains("display_none"))
                element.classList.add("display_none");
        });
        document.getElementById("muscle_group_header").innerHTML = "Select Muscle Group";
    }
    muscleGroup_HideAllExercise();
    
    function SearchExerciseByName(muscle)
    {
        let muscleName = muscle;
        let displayName = muscleName.replace(currentSide+"_","");
        muscleName = muscle;
        if(muscleName == "back_delts")
            displayName = "rear delts"
        if(muscleName == "back_lowerback")
            displayName = "lower back"
        if(muscleName == "back_upperback")
            displayName = "upper back"
        document.getElementById("muscle_group_header").innerHTML = displayName.toUpperCase();
        muscleName = muscle;
        let exerciseName = "exercises_"+muscleName.replace(currentSide+"_", "");
        if(muscle == "back_delts")
            exerciseName = "exercises_back_delts";
        console.log("searching "+ exerciseName)
        const SearchExercises = document.querySelectorAll("."+exerciseName);
        SearchExercises.forEach(exerciseElement => {
            exerciseElement.classList.remove("display_none");
        });
    }
    const eFrontBody = document.querySelectorAll(".front_body");
    const eBackBody = document.querySelectorAll(".back_body");
    const eFullBody = document.querySelectorAll(".full_body");
    
    function DisableSide()
    {
        let sideToDisable;
        if(currentSide == sideFront)
            sideToDisable = eBackBody;
        else
            sideToDisable = eFrontBody;

        sideToDisable.forEach(element => {
            if(!element.classList.contains("display_none"))
                element.classList.add("display_none");
        });
    }
    function EnableSide()
    {
        eFullBody.forEach(element => {
            element.classList.remove("scalex_0")
        });
        let sideToEnable;
        if(currentSide == sideFront)
            sideToEnable = eFrontBody;
        else
            sideToEnable = eBackBody;

        sideToEnable.forEach(element => {
            element.classList.remove("display_none");
        });
    }
    function ChangeToSide()
    {
        eFullBody.forEach(element => {
        if(element.classList.contains("scalex_0"))
            return;
        });
        eFullBody.forEach(element => {
            element.classList.add("scalex_0");
        });
        setTimeout(DisableSide, 500);
        setTimeout(EnableSide, 500);
    }
    function FlipBtnEvent()
    {
        if(currentSide == sideFront)
            currentSide = sideBack;
        else
            currentSide = sideFront;
        ChangeToSide();
    }

    const FlipBtn = document.querySelectorAll(".toggle_body");
    FlipBtn.forEach(element => {
        console.log("Adding");
        element.addEventListener("click", FlipBtnEvent);
    });

var eQuizChosenOptions = document.querySelectorAll(".chosen_option");
const eQuizChosenOptionContainer = document.getElementById("chosen_options_container");
function QuizRemoveAllChosenOptions()
{
    eQuizChosenOptions = document.querySelectorAll(".chosen_option");
    eQuizChosenOptions.forEach(element => {
        element.remove();
    });
}
function QuizUnselectAllMuscle()
{
    const musclesSelected = document.querySelectorAll("#quiz_full_body_section .muscle_selected");
    musclesSelected.forEach(muscle => {
        muscle.classList.remove("muscle_selected");
    });
}
function QuizSelectMuscleToOption(muscle)
{
    const newOption = document.createElement("p");
    let muscleName = muscle;
    let displayName = muscleName.replace(currentSide+"_","");
    muscleName = muscle;
    if(muscleName == "back_delts")
        displayName = "rear delts";
    if(muscleName == "back_lowerback")
        displayName = "lower back";
    if(muscleName == "back_upperback")
        displayName = "upper back";
    newOption.classList.add("chosen_option");
    newOption.innerHTML = displayName;
    muscleName = muscle;
    let exerciseName = "exercises_"+muscleName.replace(currentSide+"_", "");
        if(muscle == "back_delts")
            exerciseName = "exercises_back_delts";
    newOption.classList.add("option_"+exerciseName);
    eQuizChosenOptionContainer.appendChild(newOption);
}
function QuizMuscleSelectBtn_Event(getMuscleFunction)
{
    let {element: muscle_red, muscleName: muscle} = getMuscleFunction("red");

    if(muscle_red.classList.contains("muscle_selected"))
    {
        console.log("remoiving");
        let exerciseName = "exercises_"+muscle.replace(currentSide+"_", "");
        if(muscle == "back_delts")
            exerciseName = "exercises_back_delts";
        document.querySelector(".option_"+exerciseName).remove();
        muscle_red.classList.remove("muscle_selected");
        return;
    }
    muscle_red.classList.add("muscle_selected");
    QuizSelectMuscleToOption(muscle);
}
function QuizRandomizeExercise()
{
    ExerciseElements = document.querySelectorAll("#quiz_content > div ");
    ExerciseElements.forEach(element => {
        if(!element.classList.contains("display_none"))
            element.classList.add("display_none");
    });
    const randomIndex = Math.floor(Math.random() * ExerciseElements.length);
    if (ExerciseElements.length > 0) {
        ExerciseElements[randomIndex].classList.remove("display_none");
    }
}
function InitaliseQuizMuscleBtn(getMuscleFunction)
{
    fullbodySection = "quiz_full_body_section";
    const {element: muscle_group_Btn, muscleName: muscle } = getMuscleFunction("btn");
    muscle_group_Btn.classList.add("opacity_0");

    muscle_group_Btn.addEventListener("click", function()
    {
        fullbodySection = "quiz_full_body_section";
        QuizMuscleSelectBtn_Event(getMuscleFunction);
    });
    muscle_group_Btn.addEventListener("mouseenter",function()
    {
        fullbodySection = "quiz_full_body_section";
        const  {element: muscle_group_red, muscleName: muscle } = getMuscleFunction("red");
        muscle_group_red.classList.remove("opacity_0");
        if(!muscle_group_red.classList.contains("hovering_muscle"))
            muscle_group_red.classList.add("hovering_muscle");
    });
    muscle_group_Btn.addEventListener("mouseleave",function()
    {
        fullbodySection = "quiz_full_body_section";
        const {element: muscle_group_red, muscle} = getMuscleFunction("red");
        if(!muscle_group_red.classList.contains("opacity_0"))
            muscle_group_red.classList.add("opacity_0");
        muscle_group_red.classList.remove("hovering_muscle");
    });
}  

    InitaliseQuizMuscleBtn(GetFrontTraps);
    InitaliseQuizMuscleBtn(GetFrontPecs);
    InitaliseQuizMuscleBtn(GetFrontDelts);
    InitaliseQuizMuscleBtn(GetFrontAbdominals);
    InitaliseQuizMuscleBtn(GetFrontObliques);
    InitaliseQuizMuscleBtn(GetFrontBiceps);
    InitaliseQuizMuscleBtn(GetFrontForearms);
    InitaliseQuizMuscleBtn(GetFrontQuads);
    InitaliseQuizMuscleBtn(GetFrontCalfs);
    
    InitaliseQuizMuscleBtn(GetBackTraps);
    InitaliseQuizMuscleBtn(GetBackReardelts);
    InitaliseQuizMuscleBtn(GetBackUpperback);
    InitaliseQuizMuscleBtn(GetBackLats);
    InitaliseQuizMuscleBtn(GetBackTriceps);
    InitaliseQuizMuscleBtn(GetBackForearms);
    InitaliseQuizMuscleBtn(GetBackLowerback);
    InitaliseQuizMuscleBtn(GetBackGlutes);
    InitaliseQuizMuscleBtn(GetBackHamstring);
    InitaliseQuizMuscleBtn(GetBackCalfs);

var CorrectAnswers = [];
var Score = 0;

function CheckAnswer()
{
    const eExercise = document.querySelector("#quiz_content > div:not(.display_none)");
    const eOptions = document.querySelectorAll(".chosen_option");

    var iExerciseCount = 0;
    var iExerciseMatchCount = 0;
    var iExerciseNotMatchCount = 0;
    CorrectAnswers.length= 0;
    eExercise.classList.forEach(className =>
    {
        if(className.includes("exercises_"))
        {
            iExerciseCount++;
            CorrectAnswers.push(className.replace("exercises_",""));
            eOptions.forEach(eOption =>
            {
                console.log("exercise ans" + className + " Option ans" + eOption.classList[1].replace("option_",""));

                if(className == eOption.classList[1].replace("option_",""))
                    iExerciseMatchCount++;
                else
                    iExerciseNotMatchCount++;
            });
        }
        
    });
    if(iExerciseCount == 0 && iExerciseMatchCount == 0)
        return false;
    return iExerciseCount == iExerciseMatchCount && iExerciseNotMatchCount == 0;
}

const eQuizConclusion = document.getElementById("quiz_conclusion");
const eQuizConclusionHeader = eQuizConclusion.querySelector("div:first-child h2");
const eQuizConclusionList = eQuizConclusion.querySelector("div:first-child div:last-child ol");
const QuizConclusionContinueBtn = eQuizConclusion.querySelector("div:last-child button");
QuizConclusionContinueBtn.addEventListener("click",function(){
    if(!eQuizConclusion.classList.contains("display_none"))
        eQuizConclusion.classList.add("display_none");
    eQuizSection.classList.remove("display_none");
    eQuizSection.scrollIntoView({
        behavior: "smooth"
    })
    QuizRandomizeExercise();
    QuizUnselectAllMuscle();
    QuizRemoveAllChosenOptions()
    eQuizConclusion.classList.remove("bgcolor_lightgreen_opacity_0_75");
    eQuizConclusion.classList.remove("bgcolor_lightredsky_opacity_0_75");
});

if(!eQuizConclusion.classList.contains("display_none"))
    eQuizConclusion.classList.add("display_none");

function CorrectAnswer()
{
    eQuizConclusion.classList.add("bgcolor_lightgreen_opacity_0_75");
    eQuizConclusionHeader.innerHTML = "Correct";
    Score++;
}
function WrongAnswer()
{
    eQuizConclusion.classList.add("bgcolor_lightredsky_opacity_0_75");
    eQuizConclusionHeader.innerHTML = "Wrong";
}

const QuizAnswerBtn = document.getElementById("quiz_answer");
QuizAnswerBtn.addEventListener("click", function()
{
    eQuizConclusion.classList.remove("display_none");
    eQuizConclusion.style.zIndex = 7;
    if(!eQuizSection.classList.contains("display_none"))
        eQuizSection.classList.add("display_none");
    if(CheckAnswer())
    {
        CorrectAnswer();
    }
    else
    {
        WrongAnswer();
    }
    const items = eQuizConclusionList.querySelectorAll("li");
    const ol = document.querySelector("#quiz_conclusion ol");
    items.forEach(item => {
        item.remove();
    });
    CorrectAnswers.forEach(answer => {
        const newItem = document.createElement("li");
        newItem.innerHTML = answer;
        ol.appendChild(newItem);
    });
    eQuizScore.innerHTML = "Score: " + Score; 

})
QuizRandomizeExercise();

const eQuizStartMenu = document.getElementById("quiz_start_menu");
const eQuizProcessMenu = document.getElementById("quiz_process");
const eQuizScore = document.getElementById("quiz_score");
const eQuizSection = document.getElementById("answer_quiz_section");
function StartQuiz()
{
    eQuizProcessMenu.classList.remove("display_none");
    eQuizSection.classList.remove("display_none");
    if(!eQuizStartMenu.classList.contains("display_none"))
        eQuizStartMenu.classList.add("display_none");
    eQuizScore.innerHTML = "Score: " + Score; 
} 
function StopQuiz()
{
    eQuizStartMenu.classList.remove("display_none");
    if(!eQuizProcessMenu.classList.contains("display_none"))
        eQuizProcessMenu.classList.add("display_none");
    if(!eQuizSection.classList.contains("display_none"))
        eQuizSection.classList.add("display_none");
}
StopQuiz();
const QuizStartBtn = document.getElementById("quiz_start_btn");
const QuizStopBtn = document.getElementById("quiz_stop_btn");
QuizStartBtn.addEventListener("click",function()
{
    Score = 0;
    StartQuiz();
    QuizRandomizeExercise();
})
QuizStopBtn.addEventListener("click",function()
{
    StopQuiz();
})



}
const sWhystayfit = document.getElementById("whystayfit");
const sSubtopic = document.getElementById("subtopics");
const sExtras = document.getElementById("extras");
const eNav_whystayfit = document.getElementById("nav_whystayfit");
const eNav_weightlift = document.getElementById("nav_weightlift");
const eNav_calisthenics = document.getElementById("nav_calisthenics");
const eNav_bulkcut = document.getElementById("nav_bulkcut");
const eNav_extras = document.getElementById("nav_extras");

function HideAllPages()
{
    let pages =  document.querySelectorAll(".page");
    pages.forEach(page => {
        if(!page.classList.contains("display_none"))
        {
            page.classList.add("display_none")
        }
    });
}
function ShowPage(page)
{
    if(page.classList.contains("display_none"))
        page.classList.remove("display_none");

    page.scrollIntoView({  behavior: "smooth"});
}

eNav_whystayfit.addEventListener("click", function()
{
    HideAllPages();
    ShowPage(sWhystayfit);

    content_grid_name = "whystayfit";
    SetContentGridElement();
    if(content_grid_element)
    {
        card_size = SetMaxCardsNumber();
        SetButtons();
        Card_ShowSelected(card_selected);
    }
}
)
eNav_weightlift.addEventListener("click", function()

{
    notNavClick = false;
    HideAllPages();
    ShowPage(sSubtopic);
    SelectWeightlift();
}
)
eNav_calisthenics.addEventListener("click", function()

{
    notNavClick = false;
    HideAllPages();
    ShowPage(sSubtopic);
    
    SelectCalisthenics();
}
)
eNav_bulkcut.addEventListener("click", function()

{
    notNavClick = false;
    HideAllPages();
    ShowPage(sSubtopic);
    Selectbulkcut();
}
)

eNav_extras.addEventListener("click",function()
{
    HideAllPages();
    ShowPage(sExtras);
})
function toggleMobileNav()
{
  const navLinks = document.getElementById("mobile_nav_links");
  navLinks.classList.toggle("show");
}
document.getElementById("mobile_nav_toggle").addEventListener("click",toggleMobileNav);

document.getElementById("mobile_nav_whystayfit").addEventListener("click", function()
{
    HideAllPages();
    ShowPage(sWhystayfit);

    content_grid_name = "whystayfit";
    SetContentGridElement();
    if(content_grid_element)
    {
        card_size = SetMaxCardsNumber();
        SetButtons();
        Card_ShowSelected(card_selected);
    }
    toggleMobileNav();
}
);
document.getElementById("mobile_nav_weightlift").addEventListener("click", function()

{
    notNavClick = false;
    HideAllPages();
    ShowPage(sSubtopic);
    
    SelectWeightlift();
    toggleMobileNav();
}
);
document.getElementById("mobile_nav_calisthenics").addEventListener("click", function()

{
    notNavClick = false;
    HideAllPages();
    ShowPage(sSubtopic);
    
    SelectCalisthenics();
    toggleMobileNav();
}
);
document.getElementById("mobile_nav_bulkcut").addEventListener("click", function()

{
    notNavClick = false;
    HideAllPages();
    ShowPage(sSubtopic);
    Selectbulkcut();
    toggleMobileNav();
}
);
document.getElementById("mobile_nav_extras").addEventListener("click",function()
{
    notNavClick = false;
    HideAllPages();
    ShowPage(sExtras);
    toggleMobileNav();
})
;
const sound = new Audio("audio/star_finger.mp3");
document.getElementById("index_page_jotaro_btn").addEventListener("click",
    function()
{
    sound.play();
})
document.getElementById("index_page_qr_btn").addEventListener("click",
    function()
    {
        document.getElementById("qr_code").classList.toggle("display_none");
    }

)
document.getElementById("close_qr_btn").addEventListener("click",
    function()
    {
        document.getElementById("qr_code").classList.toggle("display_none");
    }
)