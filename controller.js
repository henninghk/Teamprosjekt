function upgrade(){
    if (points < 10) return;
    points -= 10;
    PointsUppgraded ++;
    show();
}
function downgrade(){
    if (points < 0) return;
    points += 10;
    PointsUppgraded --;
    show();

}
function sirkel(){
    points += PointsUppgraded;
    show();
}