function paraloh(){
        var currentY = '';
        var currentX = '';
        var movementConstant = .015;
        $(document).mousemove(function(e) {
            if (currentY == '') currentY = e.pageY;
            if (currentX == '') currentX = e.pageX;
            var ydiff = e.pageY - currentY;
            var xdiff = e.pageX - currentX;
            currentY = e.pageY;
            currentX = e.pageX;
            $('#parallax div').each(function(i, el) {
                var movement = (i + 1) * (ydiff * movementConstant);
                var movementx = (i + 1) * (xdiff * movementConstant);
                var randX = randomInteger(1, 2);
                var newY = $(el).position().top + movement;
                var newX = $(el).position().left + movementx;
                if (randX == 1) {
                    $(el).css('top', newY + 'px');
                } else {
                    $(el).css('left', newX + 'px');
                }
            });
        });
}
