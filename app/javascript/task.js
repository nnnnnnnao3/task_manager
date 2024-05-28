document.addEventListener("turbolinks:load", () => {
  //add-task-button(追加ボタン)をaddTaskButtonに格納
  const addTaskButton = document.getElementById('add-task-button');
  //tasks-listの要素(チェックボックスとタスクの入力欄のリスト)をtasksListに格納
  const tasksList = document.getElementById('tasks-list');

  function addTaskItem() {
    //<div></div>を生成しtaskItemに格納
    const taskItem = document.createElement('div');
    //生成したdiv要素にtask-ItemというクラスをつけてsetAttributeに格納
    taskItem.setAttribute("class","task-Item");
    //taskItem 要素の innerHTML プロパティに、新しいHTMLコンテンツを設定
    taskItem.innerHTML = `
    <input type="checkbox" name="task[task_items_attributes][][completed]" class="check-box" />
    <input type="text" name="task[task_items_attributes][][description]" class="form-text" />
    <a href="#" class="memo-button">メモ</a>
    <a href="#" class="image-button">画像</a>
    <a href="#" class="due-date-button">期日</a>
    <a href="#" class="delete-task-button">削除</a>

    <div class="memo-field" style="display: none;">
      <textarea name="task[task_items_attributes][][memo]" class="memo-text"></textarea>
    </div>
    <div class="image-field" style="display: none;">
      <input type="file" name="task[task_items_attributes][][image]" class="image-upload" />
    </div>
    <div class="due-date-field" style="display: none;">
      <input type="date" name="task[task_items_attributes][][due_date]" class="due-date-input" />
    </div>
    `;
    //親要素(tasksList)に子要素(taskItem)を追加
    tasksList.appendChild(taskItem);

    // 削除ボタンのイベントリスナーを追加
    taskItem.querySelector('.delete-task-button').addEventListener('click', (e) => {
      e.preventDefault();
      taskItem.remove();
    });

    // チェックボックスの変更イベントリスナーを追加
    taskItem.querySelector('.check-box').addEventListener('change', (e) => {
      //taskItem要素内のclassがform-textである要素を取得し、descriptionFieldに格納
      const descriptionField = taskItem.querySelector('.form-text');
      //チェックボックスがチェックされているかどうかを確認
      if (e.target.checked) {
        //チェックされていたら説明フィールド（descriptionField）に罫線（取り消し線）を引く
        descriptionField.style.textDecoration = 'line-through';
      } else {
        //チェックが外されたら説明フィールドの罫線を取り除く
        descriptionField.style.textDecoration = 'none';
      }
    });

    // taskItem要素内のメモボタン（classがmemo-buttonである要素）にクリックイベントリスナーを追加
    taskItem.querySelector('.memo-button').addEventListener('click', (e) => {
      e.preventDefault();
      //taskItem要素内のメモフィールド（classがmemo-fieldである要素）を取得し、memoField変数に格納
      const memoField = taskItem.querySelector('.memo-field');
      //メモフィールドのdisplayスタイルプロパティがnoneであればblockに、そうでなければnoneに設定
      if (memoField.style.display === 'none') {
        memoField.style.display = 'block';
      } else {
        memoField.style.display = 'none';
      }
    });

    // taskItem要素内の画像ボタン（classがimage-buttonである要素）にクリックイベントリスナーを追加
    taskItem.querySelector('.image-button').addEventListener('click', (e) => {
      e.preventDefault();
      //taskItem要素内の画像フィールド（classがimage-fieldである要素）を取得し、imageField変数に格納
      const imageField = taskItem.querySelector('.image-field');
      //画像フィールドのdisplayスタイルプロパティがnoneであればblockに、そうでなければnoneに設定
      if (imageField.style.display === 'none') {
        imageField.style.display = 'block';
      } else {
        imageField.style.display = 'none';
      }
    });

    // taskItem要素内の期日ボタン（classがdue-date-buttonである要素）にクリックイベントリスナーを追加
    taskItem.querySelector('.due-date-button').addEventListener('click', (e) => {
      e.preventDefault();
      //taskItem要素内の期日フィールド（classがdue-date-fieldである要素）を取得し、dueDateField変数に格納
      const dueDateField = taskItem.querySelector('.due-date-field');
      //期日フィールドのdisplayスタイルプロパティがnoneであればblockに、そうでなければnoneに設定
      if (dueDateField.style.display === 'none') {
        dueDateField.style.display = 'block';
      } else {
        dueDateField.style.display = 'none';
      }
    });
  }
   //addTaskButtonにクリックイベントリスナーを追加
    addTaskButton.addEventListener('click', (e) => {
      e.preventDefault();
    //addTaskItem関数を呼び出して、新しいタスク項目を追加
      addTaskItem();
    });
  

  // ドキュメント内のすべての.delete-task-buttonクラスを持つ要素を取得し、それぞれに対して処理を実行
  document.querySelectorAll('.delete-task-button').forEach((button) => {
    //各削除ボタンに対してクリックイベントリスナーを追加
    button.addEventListener('click', (e) => {
      e.preventDefault();
      //クリックされた削除ボタンの親要素（classがtask-itemである要素）を削除
      button.closest('.task-item').remove();
    });
  });

  //ドキュメント内のすべての.check-boxクラスを持つ要素を取得し、それぞれに対して処理を実行
  document.querySelectorAll('.check-box').forEach((checkbox) => {
    //各チェックボックスに対して変更（チェック/アンチェック）イベントリスナーを追加
    checkbox.addEventListener('change', (e) => {
      //変更が発生したチェックボックスの最も近い祖先要素（classがtask-itemである要素）を取得し、それをtaskItem変数に格納
      const taskItem = e.target.closest('.task-item');
      //チェックボックスがチェックされているかどうかを確認
      if (e.target.checked) {
        //チェックされている場合taskItem要素内のclassがform-textである最初の要素を取得し、そのスタイルプロパティのtextDecorationをline-throughに設定
        taskItem.querySelector('.form-text').style.textDecoration = 'line-through';
      } else {
        //チェックされていない場合taskItem要素内のclassがform-textである最初の要素を取得し、そのスタイルプロパティのtextDecorationをnoneに設定
        taskItem.querySelector('.form-text').style.textDecoration = 'none';
      }
    });
  });

  //ドキュメント内のすべての.memo-buttonクラスを持つ要素を取得し、それぞれに対して処理を実行
  document.querySelectorAll('.memo-button').forEach((button) => {
    //各メモボタンに対してクリックイベントリスナーを追加
    button.addEventListener('click', (e) => {
      e.preventDefault();
      //クリックされたメモボタンの最も近い祖先要素（classがtask-itemである要素）内のclassがmemo-fieldである要素を取得し、それをmemoField変数に格納
      const memoField = button.closest('.task-item').querySelector('.memo-field');
      //メモフィールドのdisplayスタイルプロパティがnoneであればblockに、そうでなければnoneに設定
      if (memoField.style.display === 'none') {
        memoField.style.display = 'block';
      } else {
        memoField.style.display = 'none';
      }
    });
  });

  //ドキュメント内のすべての.image-buttonクラスを持つ要素を取得し、それぞれに対して処理を実行
  document.querySelectorAll('.image-button').forEach((button) => {
    //各画像ボタンに対してクリックイベントリスナーを追加
    button.addEventListener('click', (e) => {
      e.preventDefault();
      //クリックされた画像ボタンの最も近い祖先要素（classがtask-itemである要素）内のclassがimage-fieldである要素を取得し、それをimageField変数に格納
      const imageField = button.closest('.task-item').querySelector('.image-field');
      //画像フィールドのdisplayスタイルプロパティがnoneであればblockに、そうでなければnoneに設定
      if (imageField.style.display === 'none') {
        imageField.style.display = 'block';
      } else {
        imageField.style.display = 'none';
      }
    });
  });

  //ドキュメント内のすべての.due-date-buttonクラスを持つ要素を取得し、それぞれに対して処理を実行
  document.querySelectorAll('.due-date-button').forEach((button) => {
    //各期日ボタンに対してクリックイベントリスナーを追加
    button.addEventListener('click', (e) => {
      e.preventDefault();
      //クリックされた期日ボタンの最も近い祖先要素（classがtask-itemである要素）内のclassがdue-date-fieldである要素を取得し、それをdueDateField変数に格納
      const dueDateField = button.closest('.task-item').querySelector('.due-date-field');
      //期日フィールドのdisplayスタイルプロパティがnoneであればblockに、そうでなければnoneに設定      
      if (dueDateField.style.display === 'none') {
        dueDateField.style.display = 'block';
      } else {
        dueDateField.style.display = 'none';
      }  
    });
  });
});