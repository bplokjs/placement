var reg = /^\-/;

function getOffset(h, v, offset) {
    if (offset[0]) {
        h += reg.test(offset[0]) ? offset[0] : '+' + offset[0];
    }

    if (offset[1]) {
        v += reg.test(offset[1]) ? offset[1] : '+' + offset[1];
    }

    return [h, v].join(' ');
}

// at: point(at)
// my: point(at) position of target

var _placements = {
    center: function (offset) {
        return {
            at: getOffset('center', 'center', offset),
            my: 'center center',
        }
    },
    centerCenter: function (offset) {
        return {
            at: getOffset('center', 'center', offset),
            my: 'center center',
        }
    },
    left: function (offset) {
        return this.leftCenter(offset);
    },
    top: function (offset) {
        return this.topCenter(offset);
    },
    right: function (offset) {
        return this.rightCenter(offset);
    },
    bottom: function (offset) {
        return this.bottomCenter(offset);
    },
    leftCenter: function (offset) {
        return {
            at: getOffset('left', 'center', offset),
            my: 'right center',
        }
    },
    rightCenter: function (offset) {
        return {
            at: getOffset('right', 'center', offset),
            my: 'left center',
        }
    },
    topCenter: function (offset) {
        return {
            at: getOffset('center', 'top', offset),
            my: 'center bottom',
        }
    },
    bottomCenter: function (offset) {
        return {
            at: getOffset('center', 'bottom', offset),
            my: 'center top',
        }
    },
    topLeft: function (offset) {
        return {
            at: getOffset('left', 'top', offset),
            my: 'left bottom',
        }
    },
    leftTop: function (offset) {
        return {
            at: getOffset('left', 'top', offset),
            my: 'right top',
        }
    },
    topRight: function (offset) {
        return {
            at: getOffset('right', 'top', offset),
            my: 'right bottom',
        }
    },
    rightTop: function (offset) {
        return {
            at: getOffset('right', 'top', offset),
            my: 'left top',
        }
    },
    bottomRight: function (offset) {
        return {
            at: getOffset('right', 'bottom', offset),
            my: 'right top',
        }
    },
    rightBottom: function (offset) {
        return {
            at: getOffset('right', 'bottom', offset),
            my: 'left bottom',
        }
    },
    bottomLeft: function (offset) {
        return {
            at: getOffset('left', 'bottom', offset),
            my: 'left top',
        }
    },
    leftBottom: function (offset) {
        return {
            at: getOffset('left', 'bottom', offset),
            my: 'right bottom',
        }
    },
};

module.exports = function getPlacement(placement, offset) {
    return _placements[placement] ? _placements[placement](offset || []) : null;
};
