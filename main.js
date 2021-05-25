var canvas = new fabric.Canvas('myCanvas')
function new_image(get_image)
{
    fabric.Image.fromURL(get_image ,function(Img) {
        block_image_height = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
top:player_y,
left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keycode;
    console.log(keypressede);
    if(e.shiftkey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        bolck_image_width = block_image_width + 10;
        bolck_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_heigth").innerHTML = block_image_heigth;
    }
    if(e.shiftkey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        bolck_image_width = block_image_width - 10;
        bolck_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_heigth").innerHTML = block_image_heigth;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    
   if(keypressed == '70')
   {
       new_image("ironman_face.png");
       console.log("f");
   }

   if(keypressed == '66')
   {
       new_image("spiderman_body.png");
       console.log("b");
   }

   if(keypressed == '76')
   {
       new_image("hulk_legs.png");
       console.log("l");
   }

   if(keypressed == '82')
   {
       new_image("thor_right_hand.png");
       console.log("r")
   }

   if(keypressed == '72')
   {
       new_image("captain_america_left_hand.png");
       console.log("h")
   }

   
}