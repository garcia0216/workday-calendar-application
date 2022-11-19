// Get your date and time at the time momentjs

// Get your local storage to work, so you can save the notes. Refer to module 04-Web-APIS 21-26 for local storage

// Conditional loop in order to detect if the time block is in the past, present, or future

// For each time block, run a if statement, if the time is less than the current time, that would be in the past
// If the time block is equal to the current time, that would be present
// If the timeblock is greater the current time, that would future 

// Refer to Module 03, activity 9-10 for conditional loops

// Refer to Module 04, activity 9-10 for timerInterval

//FOCUS ON : The current date at the top, saving your notes in your timeblock, detect if timeblock is past present or future

// Focus on your functional with one time block. You want to see if you can save to local storage. 
// You want test if you can detect if your timeblock is in the past, present, or future

// Your timeblock will include a time (9AM, 10AM, 11AM, ETC), a textarea, and a save button




$(document).ready(function(){
    $("section").each(function(){

       var text = localStorage.getItem($(this).attr("hour"))
       
       $(this).children("textarea").val(text)

        var currentHour = moment().hour()
        // if statement that determines whether or not the time is past, future or present
        if ($(this).attr("hour")<currentHour){
            $(this).children("textarea").addClass("past")
        }
        if ($(this).attr("hour")>currentHour){
            $(this).children("textarea").addClass("future")
        }
        if ($(this).attr("hour")==currentHour){
            $(this).children("textarea").addClass("present")
        }   
    })
    var currentDate = moment().format("MM/DD/YY hh:mm a")
    $("#currentDay").text(currentDate)

    $("button").click(function(){
        var hour = $(this).parent().attr("hour")
        var text = $(this).prev().val()
        console.log(hour)
        console.log(text)
        localStorage.setItem(hour, text)
    })
})

