var lists = [
	{
        "id": 1,
        "title": "to do 1",
        "description": "Final Exam 'Software Engineer' on May 9th",
        "status": "pending"
    },

    {
        "id": 2,
        "title": "to do 2",
        "description": "Final Exam 'ERP' on May 15th",
        "status": "pending"
    }
];

exports.findAll = function() {
    return lists;
};

exports.findById = function (id) {
    for (var i = 0; i < lists.length; i++) {
        if (lists[i].id == id) return lists[i];
    }
};