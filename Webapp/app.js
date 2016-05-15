Vue.directive('holderjs', function(text) {
  this.el.dataset.src = 'holder.js/'+(this.arg)+'?size=30&text='+(text ? text : '');//+'&bg=${color}&fg=ffffff';
  Vue.nextTick(() => Holder.run({images: this.el}));
});

Vue.directive('dropimage', {
  twoWay: true,
  bind: function() {
    var dropZone = document.getElementById('dropZone');

    this.el.addEventListener('dragover', this.dragHandler = function(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    });

    var self = this;
    this.el.addEventListener('drop', this.dropHandler = function(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      if (files.length) {
        var file = files[0];
        if (file.type.match(/image.*/)) {
          var reader = new FileReader();
          reader.onload = function(e2) {
            self.set(e2.target.result);
          }
          reader.readAsDataURL(file);
        }
      }
    });
  },

  unbind: function() {
    this.el.removeEventListener('dragover', this.dragHandler);
    this.el.removeEventListener('drop', this.dropHandler);
  },
});

new Vue({
  el: '#app',
  data: {
    newStep: {
      title: '',
      type: 'check',
    },

    steps: [],
  },

  computed: {
    stepMap: function() {
      return this.steps.reduce(function(map, step) {
        map[step.id] = step;
        return map;
      }, {});
    },
  },

  methods: {
    addNewStep: function() {
      var step = {
        id: cuid(),
        selected: true,
        type: this.newStep.type,
        title: this.newStep.title,
      };

      if (this.newStep.type === 'check') {
        step.options = [];
        step.newOption = {
          title: '',
          image: '',
          link: 'none',
        };
      } else {
        step.link = 'none';
      }

      this.steps.push(step);
      this.selected = step.id;

      this.newStep.title = '';
      this.newStep.type = 'check';
    },

    addNewOption: function(step) {
      var option = {
        id: cuid(),
        title: step.newOption.title,
        image: step.newOption.image,
        link: step.newOption.link,
      };
      step.options.push(option);

      step.newOption.title = '';
      step.newOption.image = '';
      step.newOption.link = 'none';
    },

    removeOption: function(task, id) {
      for (var i = 0; i < task.options.length; i += 1) {
        if (task.options[i].id === id) {
          task.options.splice(i, 1);
          return;
        }
      }
    },

    removeStep: function(id) {
      for (var i = 0; i < this.steps.length; i += 1) {
        if (this.steps[i].id === id) {
          this.steps.splice(i, 1);
          return;
        }
      }
    },
  },
});
