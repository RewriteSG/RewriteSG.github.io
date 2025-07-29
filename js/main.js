const body = document.body;
var content_grid_name = "";
function SelectWeightlift()
{
    
    Card_Reset();
    let TopicGrid = document.getElementById("weightlift_content_grid");
    if(TopicGrid.classList.contains("display_none"))
        TopicGrid.classList.remove("display_none");
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
        TopicGrid.classList.remove("display_none");
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
        TopicGrid.classList.remove("display_none");
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
        dQuiz.classList.remove("display_none");
    });
    musclegroup_selection_btn.addEventListener("click", function()
    {
        if(musclegroup_selection_btn.classList.contains("selected_btn"))
            return;
        quiz_selection_btn.classList.remove("selected_btn");
        musclegroup_selection_btn.classList.add("selected_btn");
        HideAllExtras();
        dMuscleGroup.classList.remove("display_none");
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
    HideAllExercise();
        return;
    }
    RemoveAllMuscleSelection();
    muscle_red.classList.add("muscle_selected");
    currentMuscle_Group_Selected = muscle;
    console.log(currentMuscle_Group_Selected);
    HideAllExercise();
    SearchExerciseByName(currentMuscle_Group_Selected);
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
    var currentMuscle_Group_Selected;
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
    
    const ExerciseElements = document.querySelectorAll("#muscle_group_content > div ");

    function HideAllExercise()
    {
        ExerciseElements.forEach(element => {
            if(!element.classList.contains("display_none"))
                element.classList.add("display_none");
        });
        document.getElementById("muscle_group_header").innerHTML = "Select Muscle Group";
    }
    HideAllExercise();
    
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
        muscleName = muscle;
        if(muscleName == "back_delts")
            exerciseName = "exercises_back_delts";
        console.log("searching "+ exerciseName)
        const SearchExercises = document.querySelectorAll("."+exerciseName);
        SearchExercises.forEach(exerciseElement => {
            exerciseElement.classList.remove("display_none");
        });
    }
    
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
    HideAllPages();
    ShowPage(sSubtopic);
    
    SelectWeightlift();
}
)
eNav_calisthenics.addEventListener("click", function()

{
    HideAllPages();
    ShowPage(sSubtopic);
    
    SelectCalisthenics();
}
)
eNav_bulkcut.addEventListener("click", function()

{
    HideAllPages();
    ShowPage(sSubtopic);
    Selectbulkcut();
}
)

eNav_extras.addEventListener("click",function()
{
    console.log("??");
    HideAllPages();
    ShowPage(sExtras);
})