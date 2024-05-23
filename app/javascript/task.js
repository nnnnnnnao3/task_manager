document.addEventListener("turbo:load", () => {
  //add-task-button(新しいタスクを追加するボタン) と tasks-list(タスク項目のリスト) 要素を取得
  const addTaskButton = document.getElementById('add-task-button');
  const tasksList = document.getElementById('tasks-list');

  //ボタンがクリックされたときに、新しいタスク項目を作成
  if (addTaskButton) {
    addTaskButton.addEventListener('click', (e) => {
      e.preventDefault();
      //一意のタイムスタンプを生成し、新しいタスク項目のIDとして使用
      const timestamp = Date.now();
      //新しい div 要素（タスク項目）を作成し、クラス task-item を追加
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item');
      //新しいタスク項目のHTMLを設定し、チェックボックス、テキスト入力、詳細説明ボタン、削除ボタンを含める
      taskItem.innerHTML = `
        <input type="checkbox" name="task[task_items_attributes][new_${timestamp}][completed]" id="task_task_items_attributes_new_${timestamp}_completed" class="check-box" />
        <input type="text" name="task[task_items_attributes][new_${timestamp}][description]" id="task_task_items_attributes_new_${timestamp}_description" class="form-text" />
        <a href="#" class="memo-button" data-task-id="new_${timestamp}">メモ</a>
        <a href="#" class="delete-task-button">削除</a>
      `;
      tasksList.appendChild(taskItem);
      //新しく追加されたタスク項目の削除ボタンにイベントリスナーを設定
      taskItem.querySelector('.delete-task-button').addEventListener('click', (e) => {
        e.preventDefault();
      //eventListenerが設定された要素自身を削除
        taskItem.remove();
      });

 
    });
  }


});