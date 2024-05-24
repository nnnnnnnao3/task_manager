class TasksController < ApplicationController
  before_action :authenticate_user!
  def index
    @tasks = current_user.tasks
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.create(task_params)
    Taskitem.create(taskitem_params)
    redirect_to root_path
end
private

def task_params
  params.permit(:task).merge(user_id: current_user.id)
end

def address_params
  params.permit(:memo, :completed, :due_date).merge(task_id: @task.id)
end
end
