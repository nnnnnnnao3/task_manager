class TasksController < ApplicationController
  before_action :authenticate_user!
  def index
    @tasks = current_user.tasks
  end

  def new
    @task = Task.new
  end


def create
  @task = Task.new(task_params)
  if @task.save
    redirect_to root_path
  else
    render :new, status: :unprocessable_entity
  end
end

private

def task_params
  params.require(:task).permit(:title, task_items_attributes: [:id, :task_name, :completed, :memo, :due_date, :image])
end


end
